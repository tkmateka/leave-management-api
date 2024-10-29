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
export class auth {
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
    this.serviceName = 'auth';
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
      instance = new auth(
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
    //appendnew_flow_auth_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: auth');
    //appendnew_flow_auth_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: auth');

    this.app['post'](
      `${this.serviceBasePath}/register`,
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
          bh = await this.sd_an2ruCoO3igs2vE0(bh, parentSpanInst);
          //appendnew_next_sd_WlS50jn9QBpkzb38
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_WlS50jn9QBpkzb38');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/login`,
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
          bh = await this.sd_nLkYsVRawtGcepIL(bh, parentSpanInst);
          //appendnew_next_sd_I9GDM1P2Ntop32Ue
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_I9GDM1P2Ntop32Ue');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/users`,
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
          bh = await this.sd_K3E8jXax554ZKghr(bh, parentSpanInst);
          //appendnew_next_sd_qokXDXQkCgISBMOp
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_qokXDXQkCgISBMOp');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'sequence_6780554823',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/refresh-token`,
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
          bh = await this.sd_nBMVULPHyiGPizxd(bh, parentSpanInst);
          //appendnew_next_sd_nSmBAIkeRsE0UQlY
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_nSmBAIkeRsE0UQlY');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_auth_HttpIn
  }
  //   service flows_auth

  //appendnew_flow_auth_start

  async sd_an2ruCoO3igs2vE0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_an2ruCoO3igs2vE0',
      parentSpanInst
    );
    try {
      const bcrypt = require('bcrypt');

      const hashedPassword = await bcrypt.hash(bh.input.body.password, 10);

      bh.body = {
        ...bh.input.body,
        password: hashedPassword,
      };

      // Prepare the query and values
      const { first_name, last_name, email, password, role_id } = bh.body;

      bh.query = `
    INSERT INTO users (first_name, last_name, email, role_id, password)
    VALUES ('${first_name}',' ${last_name}', '${email}', '${role_id}', '${password}');
`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_pwAXz1diqKCXWaly(bh, parentSpanInst);
      //appendnew_next_sd_an2ruCoO3igs2vE0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_an2ruCoO3igs2vE0',
        spanInst,
        'sd_an2ruCoO3igs2vE0'
      );
    }
  }

  async sd_pwAXz1diqKCXWaly(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pwAXz1diqKCXWaly',
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
      await this.sd_X09N9z7C6aUyjSZJ(bh, parentSpanInst);
      //appendnew_next_sd_pwAXz1diqKCXWaly
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pwAXz1diqKCXWaly',
        spanInst,
        'sd_pwAXz1diqKCXWaly'
      );
    }
  }

  async sd_X09N9z7C6aUyjSZJ(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_X09N9z7C6aUyjSZJ');
    }
  }

  async sd_nLkYsVRawtGcepIL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nLkYsVRawtGcepIL',
      parentSpanInst
    );
    try {
      bh.query = `
    SELECT * FROM users WHERE email = '${bh.input.body.email}';
`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_P2OyjCBcPleCIj2Y(bh, parentSpanInst);
      //appendnew_next_sd_nLkYsVRawtGcepIL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nLkYsVRawtGcepIL',
        spanInst,
        'sd_nLkYsVRawtGcepIL'
      );
    }
  }

  async sd_P2OyjCBcPleCIj2Y(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_P2OyjCBcPleCIj2Y',
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
      bh = await this.validateUser(bh, parentSpanInst);
      //appendnew_next_sd_P2OyjCBcPleCIj2Y
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_P2OyjCBcPleCIj2Y',
        spanInst,
        'sd_P2OyjCBcPleCIj2Y'
      );
    }
  }

  async validateUser(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validateUser',
      parentSpanInst
    );
    try {
      const bcrypt = require('bcrypt');

      // Check if user was found
      if (!bh.result[0]) {
        throw { error: 'Authentication failed' };
      }

      // Compare the password
      const passwordMatch = await bcrypt.compare(
        bh.input.body.password,
        bh.result[0].password
      );

      if (!passwordMatch) {
        throw { error: 'Authentication failed' };
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.createTokenAndRefreshToken(bh, parentSpanInst);
      //appendnew_next_validateUser
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SX6S1PRjvWa83cyT',
        spanInst,
        'validateUser'
      );
    }
  }

  async createTokenAndRefreshToken(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createTokenAndRefreshToken',
      parentSpanInst
    );
    try {
      const jwt = require('jsonwebtoken');
      const crypto = require('crypto');

      const token = jwt.sign(bh.result[0], process.env.secret_key, {
        expiresIn: '1h',
      });

      const refreshToken = crypto.randomBytes(64).toString('hex'); // Generate a random refresh token

      bh.query = `
    UPDATE users
	SET refresh_token='${refreshToken}'
	WHERE email = '${bh.input.body.email}'
`;

      bh.token = { token, refreshToken };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Mw2P8lRn5OkBcqdQ(bh, parentSpanInst);
      //appendnew_next_createTokenAndRefreshToken
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LAzBujI8olUJmSX8',
        spanInst,
        'createTokenAndRefreshToken'
      );
    }
  }

  async sd_Mw2P8lRn5OkBcqdQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Mw2P8lRn5OkBcqdQ',
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
      await this.sd_H5MUW650ZItxykPj(bh, parentSpanInst);
      //appendnew_next_sd_Mw2P8lRn5OkBcqdQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Mw2P8lRn5OkBcqdQ',
        spanInst,
        'sd_Mw2P8lRn5OkBcqdQ'
      );
    }
  }

  async sd_H5MUW650ZItxykPj(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.token);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_H5MUW650ZItxykPj');
    }
  }

  async sd_hPSa7gCyq2QQ7Prn(bh, parentSpanInst) {
    try {
      bh.web.res.status(503).send(bh.error);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hPSa7gCyq2QQ7Prn');
    }
  }

  async sd_K3E8jXax554ZKghr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_K3E8jXax554ZKghr',
      parentSpanInst
    );
    try {
      bh.query = `
    SELECT * FROM users;
`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3VLV0FdpQjsbC6er(bh, parentSpanInst);
      //appendnew_next_sd_K3E8jXax554ZKghr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_K3E8jXax554ZKghr',
        spanInst,
        'sd_K3E8jXax554ZKghr'
      );
    }
  }

  async sd_3VLV0FdpQjsbC6er(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3VLV0FdpQjsbC6er',
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
      await this.sd_l0jAQpSNm2oIFuPc(bh, parentSpanInst);
      //appendnew_next_sd_3VLV0FdpQjsbC6er
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3VLV0FdpQjsbC6er',
        spanInst,
        'sd_3VLV0FdpQjsbC6er'
      );
    }
  }

  async sd_l0jAQpSNm2oIFuPc(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_l0jAQpSNm2oIFuPc');
    }
  }

  async sd_nBMVULPHyiGPizxd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nBMVULPHyiGPizxd',
      parentSpanInst
    );
    try {
      if (!bh.input.body.refreshToken) {
        throw { error: 'Refresh token required' };
      }

      // Find user with the provided refresh token
      bh.query = `
    SELECT * FROM users
    WHERE refresh_token = '${bh.input.body.refreshToken}'
`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_8WDb7JTPBcDs2Z8S(bh, parentSpanInst);
      //appendnew_next_sd_nBMVULPHyiGPizxd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nBMVULPHyiGPizxd',
        spanInst,
        'sd_nBMVULPHyiGPizxd'
      );
    }
  }

  async sd_8WDb7JTPBcDs2Z8S(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8WDb7JTPBcDs2Z8S',
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
      bh = await this.createRefreshToken(bh, parentSpanInst);
      //appendnew_next_sd_8WDb7JTPBcDs2Z8S
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8WDb7JTPBcDs2Z8S',
        spanInst,
        'sd_8WDb7JTPBcDs2Z8S'
      );
    }
  }

  async createRefreshToken(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createRefreshToken',
      parentSpanInst
    );
    try {
      const jwt = require('jsonwebtoken');

      if (!bh.result[0]) {
        throw { error: 'Invalid refresh token' };
      }

      // Generate a new access token
      const token = jwt.sign(bh.result[0], process.env.secret_key, {
        expiresIn: '1h',
      });

      bh.result = { token };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_9PQJQmywhTGX1Ibd(bh, parentSpanInst);
      //appendnew_next_createRefreshToken
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9PFCrwe0xLKOVZUI',
        spanInst,
        'createRefreshToken'
      );
    }
  }

  async sd_9PQJQmywhTGX1Ibd(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9PQJQmywhTGX1Ibd');
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
    const catchConnectedNodes = ['sd_hPSa7gCyq2QQ7Prn'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    await this.sd_hPSa7gCyq2QQ7Prn(bh, parentSpanInst);
    //appendnew_next_catchError
    return true;
  }
  //appendnew_flow_auth_Catch
}
