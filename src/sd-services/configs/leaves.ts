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
export class leaves {
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
    this.serviceName = 'leaves';
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
      instance = new leaves(
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
    //appendnew_flow_leaves_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: leaves');
    //appendnew_flow_leaves_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: leaves');

    this.app['post'](
      `${this.serviceBasePath}/default-leaves`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
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
          bh = await this.sd_icnMfF6XDQpqTvOh(bh, parentSpanInst);
          //appendnew_next_sd_8sIwC2cj4a2OWhnn
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_8sIwC2cj4a2OWhnn');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_leaves_HttpIn
  }
  //   service flows_leaves

  //appendnew_flow_leaves_start

  async sd_icnMfF6XDQpqTvOh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_icnMfF6XDQpqTvOh',
      parentSpanInst
    );
    try {
      // Prepare the query and values
      const { start_date, end_date, leave_type, status } = bh.input.body;

      bh.query = `
    INSERT INTO leave_config (leave_type, max_days, carry_forward_days, accrual_rate, eligible_after_days, is_paid)
        VALUES
            ('Annual Leave', 21, 5, 1.75, 0, TRUE),
            ('Sick Leave', 30, 0, 1.25, 0, TRUE),
            ('Maternity Leave', 4, 0, 0.00, 0, TRUE),
            ('Paternity Leave', 10, 0, 0.00, 0, TRUE),
            ('Family Responsibility Leave', 3, 0, 0.00, 0, TRUE),
            ('Unpaid Leave', 0, 0, 0.00, 0, FALSE);
`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_M791vZAiwwOUQAyW(bh, parentSpanInst);
      //appendnew_next_sd_icnMfF6XDQpqTvOh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_icnMfF6XDQpqTvOh',
        spanInst,
        'sd_icnMfF6XDQpqTvOh'
      );
    }
  }

  async sd_M791vZAiwwOUQAyW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_M791vZAiwwOUQAyW',
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
      await this.sd_sOiANnoVRisAVOHq(bh, parentSpanInst);
      //appendnew_next_sd_M791vZAiwwOUQAyW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_M791vZAiwwOUQAyW',
        spanInst,
        'sd_M791vZAiwwOUQAyW'
      );
    }
  }

  async sd_sOiANnoVRisAVOHq(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sOiANnoVRisAVOHq');
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
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_leaves_Catch
}
