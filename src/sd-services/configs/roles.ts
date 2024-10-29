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
export class roles {
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
    this.serviceName = 'roles';
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
      instance = new roles(
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
    //appendnew_flow_roles_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: roles');
    //appendnew_flow_roles_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: roles');

    this.app['post'](
      `${this.serviceBasePath}/default-roles`,
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
          bh = await this.sd_ES0yfevWaPpk3FvQ(bh, parentSpanInst);
          //appendnew_next_sd_0IUfEuAdmv4vGA6y
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_0IUfEuAdmv4vGA6y');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/roles`,
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
          bh = await this.sd_ZVwAQb7EbUFXVxLS(bh, parentSpanInst);
          //appendnew_next_sd_6gJxbpMJctcJlZGv
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_6gJxbpMJctcJlZGv');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_roles_HttpIn
  }
  //   service flows_roles

  //appendnew_flow_roles_start

  async sd_ES0yfevWaPpk3FvQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ES0yfevWaPpk3FvQ',
      parentSpanInst
    );
    try {
      // Prepare the query and values
      const { start_date, end_date, leave_type, status } = bh.input.body;

      bh.query = `
    INSERT INTO roles (role_name, description, can_approve_leave, can_manage_users, can_view_reports, can_manage_payroll)
        VALUES
            ('Administrator', 'Responsible for overall system administration', TRUE, TRUE, TRUE, TRUE),
            ('HR Manager', 'Handles HR functions including leave management and payroll', TRUE, TRUE, TRUE, TRUE),
            ('Manager', 'Manages team and approves leave requests', TRUE, FALSE, TRUE, FALSE),
            ('Accountant', 'Manages payroll and financial records', FALSE, FALSE, TRUE, TRUE),
            ('Employee', 'Standard user with basic access to apply for leave', FALSE, FALSE, FALSE, FALSE),
            ('Intern', 'Limited access for interns or trainees', FALSE, FALSE, FALSE, FALSE);
`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TlPe99w7yNWHzidx(bh, parentSpanInst);
      //appendnew_next_sd_ES0yfevWaPpk3FvQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ES0yfevWaPpk3FvQ',
        spanInst,
        'sd_ES0yfevWaPpk3FvQ'
      );
    }
  }

  async sd_TlPe99w7yNWHzidx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TlPe99w7yNWHzidx',
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
      await this.sd_dATrK9nAHOWzE5UY(bh, parentSpanInst);
      //appendnew_next_sd_TlPe99w7yNWHzidx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TlPe99w7yNWHzidx',
        spanInst,
        'sd_TlPe99w7yNWHzidx'
      );
    }
  }

  async sd_dATrK9nAHOWzE5UY(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dATrK9nAHOWzE5UY');
    }
  }

  async sd_ZVwAQb7EbUFXVxLS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZVwAQb7EbUFXVxLS',
      parentSpanInst
    );
    try {
      bh.query = `
    SELECT * FROM roles
`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_IX1dZmhkzL3oaYTb(bh, parentSpanInst);
      //appendnew_next_sd_ZVwAQb7EbUFXVxLS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZVwAQb7EbUFXVxLS',
        spanInst,
        'sd_ZVwAQb7EbUFXVxLS'
      );
    }
  }

  async sd_IX1dZmhkzL3oaYTb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IX1dZmhkzL3oaYTb',
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
      await this.sd_ZuyXFY5JOd8lOMUB(bh, parentSpanInst);
      //appendnew_next_sd_IX1dZmhkzL3oaYTb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IX1dZmhkzL3oaYTb',
        spanInst,
        'sd_IX1dZmhkzL3oaYTb'
      );
    }
  }

  async sd_ZuyXFY5JOd8lOMUB(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZuyXFY5JOd8lOMUB');
    }
  }

  async sd_Z1joaRfajztpHX09(bh, parentSpanInst) {
    try {
      bh.web.res.status(503).send(bh.error);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Z1joaRfajztpHX09');
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
      (await this.sd_2VYO8Ba3sugU8dYl(bh, parentSpanInst))
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
  async sd_2VYO8Ba3sugU8dYl(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_Z1joaRfajztpHX09'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    await this.sd_Z1joaRfajztpHX09(bh, parentSpanInst);
    //appendnew_next_sd_2VYO8Ba3sugU8dYl
    return true;
  }
  //appendnew_flow_roles_Catch
}
