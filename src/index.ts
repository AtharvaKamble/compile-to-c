import Lexer from './lib/lexer';
import { TokenCode } from './lib/lexer/token';

const lex = new Lexer('==!=>>// This is a comment!  \n  =<=<');
let token = lex.getToken();

while (token.code !== TokenCode.EOF) {
  console.log(token);
  token = lex.getToken();
}
