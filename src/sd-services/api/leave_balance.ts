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
export class leave_balance {
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
    this.serviceName = 'leave_balance';
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
      instance = new leave_balance(
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
    //appendnew_flow_leave_balance_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: leave_balance');
    //appendnew_flow_leave_balance_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: leave_balance');

    this.app['post'](
      `${this.serviceBasePath}/leave-balance`,
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
          bh = await this.sd_PBxxwhD53VC1uVJ5(bh, parentSpanInst);
          //appendnew_next_sd_IF5NDVLG0VnHvjFV
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_IF5NDVLG0VnHvjFV');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'sequence_6780554823',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/leave-balance/:user_id`,
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
          bh = await this.sd_BfhDLuFPigKuGmcY(bh, parentSpanInst);
          //appendnew_next_sd_F5P6nuk3txWFIUoj
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_F5P6nuk3txWFIUoj');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'sequence_6780554823',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_leave_balance_HttpIn
  }
  //   service flows_leave_balance

  //appendnew_flow_leave_balance_start

  async sd_PBxxwhD53VC1uVJ5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PBxxwhD53VC1uVJ5',
      parentSpanInst
    );
    try {
      // Prepare the query and values
      const { start_date, end_date, leave_type, status } = bh.input.body;

      bh.query = `
    INSERT INTO users (start_date, end_date, leave_type, status)
    VALUES ('${start_date}', '${end_date}', '${leave_type}', '${status}');

    INSERT INTO user_leave_balances (user_id, annual_leave, sick_leave, maternity_leave, paternity_leave, family_responsibility_leave, unpaid_leave)
        VALUES
            ('${user_id}', '${annual_leave}', '${sick_leave}', '${maternity_leave}', '${paternity_leave}', '${family_responsibility_leave}', '${unpaid_leave}')
`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_X4uloLtXryqbMdAB(bh, parentSpanInst);
      //appendnew_next_sd_PBxxwhD53VC1uVJ5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PBxxwhD53VC1uVJ5',
        spanInst,
        'sd_PBxxwhD53VC1uVJ5'
      );
    }
  }

  async sd_X4uloLtXryqbMdAB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_X4uloLtXryqbMdAB',
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
      await this.sd_n6yXhqnNuqOSK5rA(bh, parentSpanInst);
      //appendnew_next_sd_X4uloLtXryqbMdAB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_X4uloLtXryqbMdAB',
        spanInst,
        'sd_X4uloLtXryqbMdAB'
      );
    }
  }

  async sd_n6yXhqnNuqOSK5rA(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_n6yXhqnNuqOSK5rA');
    }
  }

  async sd_wWepcSjGfIPnv38O(bh, parentSpanInst) {
    try {
      bh.web.res.status(503).send(bh.error);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wWepcSjGfIPnv38O');
    }
  }

  async sd_BfhDLuFPigKuGmcY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BfhDLuFPigKuGmcY',
      parentSpanInst
    );
    try {
      bh.query = `
    SELECT * FROM user_leave_balances  WHERE user_id = ${bh.input.params.user_id}
`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_yGPRmj3sqbFeTkTq(bh, parentSpanInst);
      //appendnew_next_sd_BfhDLuFPigKuGmcY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BfhDLuFPigKuGmcY',
        spanInst,
        'sd_BfhDLuFPigKuGmcY'
      );
    }
  }

  async sd_yGPRmj3sqbFeTkTq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yGPRmj3sqbFeTkTq',
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
      await this.sd_MrR3tQNgzUHZ2ejW(bh, parentSpanInst);
      //appendnew_next_sd_yGPRmj3sqbFeTkTq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yGPRmj3sqbFeTkTq',
        spanInst,
        'sd_yGPRmj3sqbFeTkTq'
      );
    }
  }

  async sd_MrR3tQNgzUHZ2ejW(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MrR3tQNgzUHZ2ejW');
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
    const catchConnectedNodes = ['sd_wWepcSjGfIPnv38O'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    await this.sd_wWepcSjGfIPnv38O(bh, parentSpanInst);
    //appendnew_next_catchError
    return true;
  }
  //appendnew_flow_leave_balance_Catch
}
