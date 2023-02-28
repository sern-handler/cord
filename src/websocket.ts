import { share } from 'rxjs';
import { webSocket, WebSocketSubjectConfig } from 'rxjs/webSocket'

//Creates a multicasted websocket connection
//ie: multiple streams share the same source (websocket connection).
export const createWsConnection = <Payload>(options: WebSocketSubjectConfig<Payload>) =>
    webSocket<Payload>(options).pipe(share());




