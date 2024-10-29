// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class leave {
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
    this.serviceName = 'leave';
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
      instance = new leave(
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
    //appendnew_flow_leave_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: leave');
    //appendnew_flow_leave_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: leave');

    this.app['post'](
      `${this.serviceBasePath}/leave`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'sequence_6780554823',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_tHpmaysetgumxHEn(bh, parentSpanInst);
          //appendnew_next_sd_qLoynhoHjhHbgfIQ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_qLoynhoHjhHbgfIQ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'sequence_6780554823',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_leave_HttpIn
  }
  //   service flows_leave

  //appendnew_flow_leave_start

  async sd_tHpmaysetgumxHEn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tHpmaysetgumxHEn',
      parentSpanInst
    );
    try {
      // Prepare the query and values
      const { start_date, end_date, leave_type, status } = bh.input.body;

      bh.query = `
    INSERT INTO users (start_date, end_date, leave_type, status)
    VALUES ('${start_date}', '${end_date}', '${leave_type}', '${status}');
`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_7yheBA7adfFv881g(bh, parentSpanInst);
      //appendnew_next_sd_tHpmaysetgumxHEn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tHpmaysetgumxHEn',
        spanInst,
        'sd_tHpmaysetgumxHEn'
      );
    }
  }

  async sd_7yheBA7adfFv881g(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7yheBA7adfFv881g',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_A0WbN5v39LNughCo'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = undefined;
      params = params ? params : [];
      bh.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_leTzIjriBgSaixv0(bh, parentSpanInst);
      //appendnew_next_sd_7yheBA7adfFv881g
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7yheBA7adfFv881g',
        spanInst,
        'sd_7yheBA7adfFv881g'
      );
    }
  }

  async sd_leTzIjriBgSaixv0(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_leTzIjriBgSaixv0');
    }
  }

  async sd_6t35UESJX5tjFDtO(bh, parentSpanInst) {
    try {
      bh.web.res.status(503).send(bh.error);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6t35UESJX5tjFDtO');
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
      (await this.catchError(bh, parentSpanInst))
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
  async catchError(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_6t35UESJX5tjFDtO'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    await this.sd_6t35UESJX5tjFDtO(bh, parentSpanInst);
    //appendnew_next_catchError
    return true;
  }
  //appendnew_flow_leave_Catch
}
