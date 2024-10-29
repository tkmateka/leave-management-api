const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { CollectorTraceExporter } = require('@opentelemetry/exporter-collector-grpc');
const { registerInstrumentations } = require('@opentelemetry/instrumentation');
const { ExpressInstrumentation } = require('@opentelemetry/instrumentation-express');
const { MongoDBInstrumentation } = require('@opentelemetry/instrumentation-mongodb');
const { Resource } = require('@opentelemetry/resources');
const { SimpleSpanProcessor } = require('@opentelemetry/sdk-trace-base');
const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');

console.log('Tracer file...');

const { config } = require('dotenv');
const { sep } = require('path');
const envFileName = process.env.NEUTRINOS_APP_ENV ? `${process.env.NEUTRINOS_APP_ENV}.env` : 'dev.env';
const envFilePath = `${process.cwd()}${sep}environments${sep}${envFileName}`;
console.log('env-file-path', envFilePath);
config({ path: envFilePath });

const provider = new NodeTracerProvider({
    resource: new Resource({
        [SemanticResourceAttributes.SERVICE_NAME]: process.env.NEU_APP_NAME,
    }),
});

const collectorTraceExporter = new CollectorTraceExporter({
    url: process.env.NEU_TRACE_COLLECTOR_URL,
});
const collectorProvider = new SimpleSpanProcessor(collectorTraceExporter);
provider.addSpanProcessor(collectorProvider);
provider.register();

registerInstrumentations({
    instrumentations: [
        getNodeAutoInstrumentations({
            '@opentelemetry/instrumentation-fs': {
                enabled: false,
              }
        }),
        new ExpressInstrumentation(),
        new MongoDBInstrumentation({
            enhancedDatabaseReporting: true,
        }),
    ],
});
