import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

const init = () => {
    Sentry.init({
        dsn: "https://43e3d1c2658547ad8409ec52c3d0660d@o1419404.ingest.sentry.io/4504369347624960",
        integrations: [new BrowserTracing()],
        tracesSampleRate: 1.0
    });
};

const log = (error) => Sentry.captureException(error);

export const loggingService = { init, log };
