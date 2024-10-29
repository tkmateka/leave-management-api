// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Middleware } from '../../middleware/Middleware'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class token {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'token';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new token(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_token_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: token');
    let mw_verifyToken: Middleware = new Middleware(
      this.serviceName,
      'verifyToken',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_sshKJg07Ytmdpgau(bh, parentSpanInst);
          //appendnew_next_sd_TReso6qSHRIHOmbV
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_TReso6qSHRIHOmbV');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['verifyToken'] = mw_verifyToken;
    //appendnew_flow_token_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: token');
    //appendnew_flow_token_HttpIn
  }
  //   service flows_token

  //appendnew_flow_token_start

  async sd_sshKJg07Ytmdpgau(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sshKJg07Ytmdpgau',
      parentSpanInst
    );
    try {
      const jwt = require('jsonwebtoken');
      let token;

      if (bh.input.headers.authorization) {
        token = bh.input.headers.authorization.split(' ')[1];
      }

      if (!token) throw { error: 'Access denied' };

      const decoded = await jwt.verify(token, process.env.secret_key);

      bh.input.tokenExpiry = decoded.exp;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_kXCxutb7YzlzTB3c(bh, parentSpanInst);
      //appendnew_next_sd_sshKJg07Ytmdpgau
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sshKJg07Ytmdpgau',
        spanInst,
        'sd_sshKJg07Ytmdpgau'
      );
    }
  }

  async sd_kXCxutb7YzlzTB3c(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kXCxutb7YzlzTB3c',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kXCxutb7YzlzTB3c',
        spanInst,
        'sd_kXCxutb7YzlzTB3c'
      );
    }
  }

  async sd_LgShtVcRZDX623HR(bh, parentSpanInst) {
    try {
      bh.web.res.status(503).send(bh.error);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LgShtVcRZDX623HR');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false ||
      (await this.sd_ApBbOXVMeOxDjcjs(bh, parentSpanInst))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_ApBbOXVMeOxDjcjs(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_LgShtVcRZDX623HR'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    await this.sd_LgShtVcRZDX623HR(bh, parentSpanInst);
    //appendnew_next_sd_ApBbOXVMeOxDjcjs
    return true;
  }
  //appendnew_flow_token_Catch
}
