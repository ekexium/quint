// Generated from ./src/generated/Tnt.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class TntLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly STRING = 31;
	public static readonly BOOL = 32;
	public static readonly INT = 33;
	public static readonly AND = 34;
	public static readonly OR = 35;
	public static readonly IFF = 36;
	public static readonly IMPLIES = 37;
	public static readonly SUBSETEQ = 38;
	public static readonly IN = 39;
	public static readonly NOTIN = 40;
	public static readonly SET = 41;
	public static readonly SEQ = 42;
	public static readonly MATCH = 43;
	public static readonly PLUS = 44;
	public static readonly MINUS = 45;
	public static readonly MUL = 46;
	public static readonly DIV = 47;
	public static readonly MOD = 48;
	public static readonly GT = 49;
	public static readonly LT = 50;
	public static readonly GE = 51;
	public static readonly LE = 52;
	public static readonly NE = 53;
	public static readonly EQ = 54;
	public static readonly ASGN = 55;
	public static readonly LPAREN = 56;
	public static readonly RPAREN = 57;
	public static readonly IDENTIFIER = 58;
	public static readonly SIMPLE_IDENTIFIER = 59;
	public static readonly LINE_COMMENT = 60;
	public static readonly COMMENT = 61;
	public static readonly WS = 62;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "T__26", "T__27", "T__28", "T__29", "STRING", "BOOL", "INT", 
		"AND", "OR", "IFF", "IMPLIES", "SUBSETEQ", "IN", "NOTIN", "SET", "SEQ", 
		"MATCH", "PLUS", "MINUS", "MUL", "DIV", "MOD", "GT", "LT", "GE", "LE", 
		"NE", "EQ", "ASGN", "LPAREN", "RPAREN", "IDENTIFIER", "SIMPLE_IDENTIFIER", 
		"LINE_COMMENT", "COMMENT", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'module'", "'{'", "'}'", "'const'", "':'", "'var'", "'assume'", 
		"'='", "'type'", "'import'", "'.'", "'val'", "'def'", "'pred'", "'action'", 
		"'temporal'", "','", "'->'", "'=>'", "'int'", "'str'", "'bool'", "'|'", 
		"'['", "']'", "'^'", "'if'", "'else'", "'&'", "'_'", undefined, undefined, 
		undefined, "'and'", "'or'", "'iff'", "'implies'", "'subseteq'", "'in'", 
		"'notin'", "'set'", "'seq'", "'match'", "'+'", "'-'", "'*'", "'/'", "'%'", 
		"'>'", "'<'", "'>='", "'<='", "'!='", "'=='", "'<-'", "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "STRING", "BOOL", "INT", "AND", "OR", 
		"IFF", "IMPLIES", "SUBSETEQ", "IN", "NOTIN", "SET", "SEQ", "MATCH", "PLUS", 
		"MINUS", "MUL", "DIV", "MOD", "GT", "LT", "GE", "LE", "NE", "EQ", "ASGN", 
		"LPAREN", "RPAREN", "IDENTIFIER", "SIMPLE_IDENTIFIER", "LINE_COMMENT", 
		"COMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TntLexer._LITERAL_NAMES, TntLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TntLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(TntLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Tnt.g4"; }

	// @Override
	public get ruleNames(): string[] { return TntLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return TntLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return TntLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return TntLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02@\u019A\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03" +
		"\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12" +
		"\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B" +
		"\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x07 \xF6\n \f \x0E \xF9\v " +
		"\x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x05!\u0106\n!" +
		"\x03\"\x06\"\u0109\n\"\r\"\x0E\"\u010A\x03#\x03#\x03#\x03#\x03$\x03$\x03" +
		"$\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03\'\x03" +
		"\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03)\x03)" +
		"\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03-\x03-\x03.\x03.\x03/\x03/\x030\x030\x031\x03" +
		"1\x032\x032\x033\x033\x034\x034\x034\x035\x035\x035\x036\x036\x036\x03" +
		"7\x037\x037\x038\x038\x038\x039\x039\x03:\x03:\x03;\x03;\x03;\x03;\x03" +
		";\x03;\x03;\x05;\u0168\n;\x03<\x03<\x07<\u016C\n<\f<\x0E<\u016F\v<\x03" +
		"<\x03<\x06<\u0173\n<\r<\x0E<\u0174\x05<\u0177\n<\x03=\x03=\x03=\x03=\x07" +
		"=\u017D\n=\f=\x0E=\u0180\v=\x03=\x03=\x03=\x03=\x03>\x03>\x03>\x03>\x07" +
		">\u018A\n>\f>\x0E>\u018D\v>\x03>\x03>\x03>\x03>\x03>\x03?\x06?\u0195\n" +
		"?\r?\x0E?\u0196\x03?\x03?\x05\xF7\u017E\u018B\x02\x02@\x03\x02\x03\x05" +
		"\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13" +
		"\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02" +
		"\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/" +
		"\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?" +
		"\x02!A\x02\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U\x02" +
		",W\x02-Y\x02.[\x02/]\x020_\x021a\x022c\x023e\x024g\x025i\x026k\x027m\x02" +
		"8o\x029q\x02:s\x02;u\x02<w\x02=y\x02>{\x02?}\x02@\x03\x02\x07\x03\x02" +
		"2;\x04\x02C\\c|\x06\x022;C\\aac|\x03\x02aa\x05\x02\v\f\x0F\x0F\"\"\x02" +
		"\u01A3\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02" +
		"\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02" +
		"\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02" +
		"\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02" +
		"\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02" +
		"\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02" +
		"\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03" +
		"\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02" +
		"\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02" +
		";\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02" +
		"\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02" +
		"\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03" +
		"\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02" +
		"\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02" +
		"]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02" +
		"\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02\x02\x02\x02i\x03\x02\x02\x02" +
		"\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02\x02o\x03\x02\x02\x02\x02q\x03" +
		"\x02\x02\x02\x02s\x03\x02\x02\x02\x02u\x03\x02\x02\x02\x02w\x03\x02\x02" +
		"\x02\x02y\x03\x02\x02\x02\x02{\x03\x02\x02\x02\x02}\x03\x02\x02\x02\x03" +
		"\x7F\x03\x02\x02\x02\x05\x86\x03\x02\x02\x02\x07\x88\x03\x02\x02\x02\t" +
		"\x8A\x03\x02\x02\x02\v\x90\x03\x02\x02\x02\r\x92\x03\x02\x02\x02\x0F\x96" +
		"\x03\x02\x02\x02\x11\x9D\x03\x02\x02\x02\x13\x9F\x03\x02\x02\x02\x15\xA4" +
		"\x03\x02\x02\x02\x17\xAB\x03\x02\x02\x02\x19\xAD\x03\x02\x02\x02\x1B\xB1" +
		"\x03\x02\x02\x02\x1D\xB5\x03\x02\x02\x02\x1F\xBA\x03\x02\x02\x02!\xC1" +
		"\x03\x02\x02\x02#\xCA\x03\x02\x02\x02%\xCC\x03\x02\x02\x02\'\xCF\x03\x02" +
		"\x02\x02)\xD2\x03\x02\x02\x02+\xD6\x03\x02\x02\x02-\xDA\x03\x02\x02\x02" +
		"/\xDF\x03\x02\x02\x021\xE1\x03\x02\x02\x023\xE3\x03\x02\x02\x025\xE5\x03" +
		"\x02\x02\x027\xE7\x03\x02\x02\x029\xEA\x03\x02\x02\x02;\xEF\x03\x02\x02" +
		"\x02=\xF1\x03\x02\x02\x02?\xF3\x03\x02\x02\x02A\u0105\x03\x02\x02\x02" +
		"C\u0108\x03\x02\x02\x02E\u010C\x03\x02\x02\x02G\u0110\x03\x02\x02\x02" +
		"I\u0113\x03\x02\x02\x02K\u0117\x03\x02\x02\x02M\u011F\x03\x02\x02\x02" +
		"O\u0128\x03\x02\x02\x02Q\u012B\x03\x02\x02\x02S\u0131\x03\x02\x02\x02" +
		"U\u0135\x03\x02\x02\x02W\u0139\x03\x02\x02\x02Y\u013F\x03\x02\x02\x02" +
		"[\u0141\x03\x02\x02\x02]\u0143\x03\x02\x02\x02_\u0145\x03\x02\x02\x02" +
		"a\u0147\x03\x02\x02\x02c\u0149\x03\x02\x02\x02e\u014B\x03\x02\x02\x02" +
		"g\u014D\x03\x02\x02\x02i\u0150\x03\x02\x02\x02k\u0153\x03\x02\x02\x02" +
		"m\u0156\x03\x02\x02\x02o\u0159\x03\x02\x02\x02q\u015C\x03\x02\x02\x02" +
		"s\u015E\x03\x02\x02\x02u\u0167\x03\x02\x02\x02w\u0176\x03\x02\x02\x02" +
		"y\u0178\x03\x02\x02\x02{\u0185\x03\x02\x02\x02}\u0194\x03\x02\x02\x02" +
		"\x7F\x80\x07o\x02\x02\x80\x81\x07q\x02\x02\x81\x82\x07f\x02\x02\x82\x83" +
		"\x07w\x02\x02\x83\x84\x07n\x02\x02\x84\x85\x07g\x02\x02\x85\x04\x03\x02" +
		"\x02\x02\x86\x87\x07}\x02\x02\x87\x06\x03\x02\x02\x02\x88\x89\x07\x7F" +
		"\x02\x02\x89\b\x03\x02\x02\x02\x8A\x8B\x07e\x02\x02\x8B\x8C\x07q\x02\x02" +
		"\x8C\x8D\x07p\x02\x02\x8D\x8E\x07u\x02\x02\x8E\x8F\x07v\x02\x02\x8F\n" +
		"\x03\x02\x02\x02\x90\x91\x07<\x02\x02\x91\f\x03\x02\x02\x02\x92\x93\x07" +
		"x\x02\x02\x93\x94\x07c\x02\x02\x94\x95\x07t\x02\x02\x95\x0E\x03\x02\x02" +
		"\x02\x96\x97\x07c\x02\x02\x97\x98\x07u\x02\x02\x98\x99\x07u\x02\x02\x99" +
		"\x9A\x07w\x02\x02\x9A\x9B\x07o\x02\x02\x9B\x9C\x07g\x02\x02\x9C\x10\x03" +
		"\x02\x02\x02\x9D\x9E\x07?\x02\x02\x9E\x12\x03\x02\x02\x02\x9F\xA0\x07" +
		"v\x02\x02\xA0\xA1\x07{\x02\x02\xA1\xA2\x07r\x02\x02\xA2\xA3\x07g\x02\x02" +
		"\xA3\x14\x03\x02\x02\x02\xA4\xA5\x07k\x02\x02\xA5\xA6\x07o\x02\x02\xA6" +
		"\xA7\x07r\x02\x02\xA7\xA8\x07q\x02\x02\xA8\xA9\x07t\x02\x02\xA9\xAA\x07" +
		"v\x02\x02\xAA\x16\x03\x02\x02\x02\xAB\xAC\x070\x02\x02\xAC\x18\x03\x02" +
		"\x02\x02\xAD\xAE\x07x\x02\x02\xAE\xAF\x07c\x02\x02\xAF\xB0\x07n\x02\x02" +
		"\xB0\x1A\x03\x02\x02\x02\xB1\xB2\x07f\x02\x02\xB2\xB3\x07g\x02\x02\xB3" +
		"\xB4\x07h\x02\x02\xB4\x1C\x03\x02\x02\x02\xB5\xB6\x07r\x02\x02\xB6\xB7" +
		"\x07t\x02\x02\xB7\xB8\x07g\x02\x02\xB8\xB9\x07f\x02\x02\xB9\x1E\x03\x02" +
		"\x02\x02\xBA\xBB\x07c\x02\x02\xBB\xBC\x07e\x02\x02\xBC\xBD\x07v\x02\x02" +
		"\xBD\xBE\x07k\x02\x02\xBE\xBF\x07q\x02\x02\xBF\xC0\x07p\x02\x02\xC0 \x03" +
		"\x02\x02\x02\xC1\xC2\x07v\x02\x02\xC2\xC3\x07g\x02\x02\xC3\xC4\x07o\x02" +
		"\x02\xC4\xC5\x07r\x02\x02\xC5\xC6\x07q\x02\x02\xC6\xC7\x07t\x02\x02\xC7" +
		"\xC8\x07c\x02\x02\xC8\xC9\x07n\x02\x02\xC9\"\x03\x02\x02\x02\xCA\xCB\x07" +
		".\x02\x02\xCB$\x03\x02\x02\x02\xCC\xCD\x07/\x02\x02\xCD\xCE\x07@\x02\x02" +
		"\xCE&\x03\x02\x02\x02\xCF\xD0\x07?\x02\x02\xD0\xD1\x07@\x02\x02\xD1(\x03" +
		"\x02\x02\x02\xD2\xD3\x07k\x02\x02\xD3\xD4\x07p\x02\x02\xD4\xD5\x07v\x02" +
		"\x02\xD5*\x03\x02\x02\x02\xD6\xD7\x07u\x02\x02\xD7\xD8\x07v\x02\x02\xD8" +
		"\xD9\x07t\x02\x02\xD9,\x03\x02\x02\x02\xDA\xDB\x07d\x02\x02\xDB\xDC\x07" +
		"q\x02\x02\xDC\xDD\x07q\x02\x02\xDD\xDE\x07n\x02\x02\xDE.\x03\x02\x02\x02" +
		"\xDF\xE0\x07~\x02\x02\xE00\x03\x02\x02\x02\xE1\xE2\x07]\x02\x02\xE22\x03" +
		"\x02\x02\x02\xE3\xE4\x07_\x02\x02\xE44\x03\x02\x02\x02\xE5\xE6\x07`\x02" +
		"\x02\xE66\x03\x02\x02\x02\xE7\xE8\x07k\x02\x02\xE8\xE9\x07h\x02\x02\xE9" +
		"8\x03\x02\x02\x02\xEA\xEB\x07g\x02\x02\xEB\xEC\x07n\x02\x02\xEC\xED\x07" +
		"u\x02\x02\xED\xEE\x07g\x02\x02\xEE:\x03\x02\x02\x02\xEF\xF0\x07(\x02\x02" +
		"\xF0<\x03\x02\x02\x02\xF1\xF2\x07a\x02\x02\xF2>\x03\x02\x02\x02\xF3\xF7" +
		"\x07$\x02\x02\xF4\xF6\v\x02\x02\x02\xF5\xF4\x03\x02\x02\x02\xF6\xF9\x03" +
		"\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF8\xFA\x03" +
		"\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xFA\xFB\x07$\x02\x02\xFB@\x03\x02" +
		"\x02\x02\xFC\xFD\x07h\x02\x02\xFD\xFE\x07c\x02\x02\xFE\xFF\x07n\x02\x02" +
		"\xFF\u0100\x07u\x02\x02\u0100\u0106\x07g\x02\x02\u0101\u0102\x07v\x02" +
		"\x02\u0102\u0103\x07t\x02\x02\u0103\u0104\x07w\x02\x02\u0104\u0106\x07" +
		"g\x02\x02\u0105\xFC\x03\x02\x02\x02\u0105\u0101\x03\x02\x02\x02\u0106" +
		"B\x03\x02\x02\x02\u0107\u0109\t\x02\x02\x02\u0108\u0107\x03\x02\x02\x02" +
		"\u0109\u010A\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02\u010A\u010B\x03" +
		"\x02\x02\x02\u010BD\x03\x02\x02\x02\u010C\u010D\x07c\x02\x02\u010D\u010E" +
		"\x07p\x02\x02\u010E\u010F\x07f\x02\x02\u010FF\x03\x02\x02\x02\u0110\u0111" +
		"\x07q\x02\x02\u0111\u0112\x07t\x02\x02\u0112H\x03\x02\x02\x02\u0113\u0114" +
		"\x07k\x02\x02\u0114\u0115\x07h\x02\x02\u0115\u0116\x07h\x02\x02\u0116" +
		"J\x03\x02\x02\x02\u0117\u0118\x07k\x02\x02\u0118\u0119\x07o\x02\x02\u0119" +
		"\u011A\x07r\x02\x02\u011A\u011B\x07n\x02\x02\u011B\u011C\x07k\x02\x02" +
		"\u011C\u011D\x07g\x02\x02\u011D\u011E\x07u\x02\x02\u011EL\x03\x02\x02" +
		"\x02\u011F\u0120\x07u\x02\x02\u0120\u0121\x07w\x02\x02\u0121\u0122\x07" +
		"d\x02\x02\u0122\u0123\x07u\x02\x02\u0123\u0124\x07g\x02\x02\u0124\u0125" +
		"\x07v\x02\x02\u0125\u0126\x07g\x02\x02\u0126\u0127\x07s\x02\x02\u0127" +
		"N\x03\x02\x02\x02\u0128\u0129\x07k\x02\x02\u0129\u012A\x07p\x02\x02\u012A" +
		"P\x03\x02\x02\x02\u012B\u012C\x07p\x02\x02\u012C\u012D\x07q\x02\x02\u012D" +
		"\u012E\x07v\x02\x02\u012E\u012F\x07k\x02\x02\u012F\u0130\x07p\x02\x02" +
		"\u0130R\x03\x02\x02\x02\u0131\u0132\x07u\x02\x02\u0132\u0133\x07g\x02" +
		"\x02\u0133\u0134\x07v\x02\x02\u0134T\x03\x02\x02\x02\u0135\u0136\x07u" +
		"\x02\x02\u0136\u0137\x07g\x02\x02\u0137\u0138\x07s\x02\x02\u0138V\x03" +
		"\x02\x02\x02\u0139\u013A\x07o\x02\x02\u013A\u013B\x07c\x02\x02\u013B\u013C" +
		"\x07v\x02\x02\u013C\u013D\x07e\x02\x02\u013D\u013E\x07j\x02\x02\u013E" +
		"X\x03\x02\x02\x02\u013F\u0140\x07-\x02\x02\u0140Z\x03\x02\x02\x02\u0141" +
		"\u0142\x07/\x02\x02\u0142\\\x03\x02\x02\x02\u0143\u0144\x07,\x02\x02\u0144" +
		"^\x03\x02\x02\x02\u0145\u0146\x071\x02\x02\u0146`\x03\x02\x02\x02\u0147" +
		"\u0148\x07\'\x02\x02\u0148b\x03\x02\x02\x02\u0149\u014A\x07@\x02\x02\u014A" +
		"d\x03\x02\x02\x02\u014B\u014C\x07>\x02\x02\u014Cf\x03\x02\x02\x02\u014D" +
		"\u014E\x07@\x02\x02\u014E\u014F\x07?\x02\x02\u014Fh\x03\x02\x02\x02\u0150" +
		"\u0151\x07>\x02\x02\u0151\u0152\x07?\x02\x02\u0152j\x03\x02\x02\x02\u0153" +
		"\u0154\x07#\x02\x02\u0154\u0155\x07?\x02\x02\u0155l\x03\x02\x02\x02\u0156" +
		"\u0157\x07?\x02\x02\u0157\u0158\x07?\x02\x02\u0158n\x03\x02\x02\x02\u0159" +
		"\u015A\x07>\x02\x02\u015A\u015B\x07/\x02\x02\u015Bp\x03\x02\x02\x02\u015C" +
		"\u015D\x07*\x02\x02\u015Dr\x03\x02\x02\x02\u015E\u015F\x07+\x02\x02\u015F" +
		"t\x03\x02\x02\x02\u0160\u0168\x05w<\x02\u0161\u0162\x05w<\x02\u0162\u0163" +
		"\x07<\x02\x02\u0163\u0164\x07<\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165" +
		"\u0166\x05u;\x02\u0166\u0168\x03\x02\x02\x02\u0167\u0160\x03\x02\x02\x02" +
		"\u0167\u0161\x03\x02\x02\x02\u0168v\x03\x02\x02\x02\u0169\u016D\t\x03" +
		"\x02\x02\u016A\u016C\t\x04\x02\x02\u016B\u016A\x03\x02\x02\x02\u016C\u016F" +
		"\x03\x02\x02\x02\u016D\u016B\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02" +
		"\u016E\u0177\x03\x02\x02\x02\u016F\u016D\x03\x02\x02\x02\u0170\u0172\t" +
		"\x05\x02\x02\u0171\u0173\t\x04\x02\x02\u0172\u0171\x03\x02\x02\x02\u0173" +
		"\u0174\x03\x02\x02\x02\u0174\u0172\x03\x02\x02\x02\u0174\u0175\x03\x02" +
		"\x02\x02\u0175\u0177\x03\x02\x02\x02\u0176\u0169\x03\x02\x02\x02\u0176" +
		"\u0170\x03\x02\x02\x02\u0177x\x03\x02\x02\x02\u0178\u0179\x071\x02\x02" +
		"\u0179\u017A\x071\x02\x02\u017A\u017E\x03\x02\x02\x02\u017B\u017D\v\x02" +
		"\x02\x02\u017C\u017B\x03\x02\x02\x02\u017D\u0180\x03\x02\x02\x02\u017E" +
		"\u017F\x03\x02\x02\x02\u017E\u017C\x03\x02\x02\x02\u017F\u0181\x03\x02" +
		"\x02\x02\u0180\u017E\x03\x02\x02\x02\u0181\u0182\x07\f\x02\x02\u0182\u0183" +
		"\x03\x02\x02\x02\u0183\u0184\b=\x02\x02\u0184z\x03\x02\x02\x02\u0185\u0186" +
		"\x071\x02\x02\u0186\u0187\x07,\x02\x02\u0187\u018B\x03\x02\x02\x02\u0188" +
		"\u018A\v\x02\x02\x02\u0189\u0188\x03\x02\x02\x02\u018A\u018D\x03\x02\x02" +
		"\x02\u018B\u018C\x03\x02\x02\x02\u018B\u0189\x03\x02\x02\x02\u018C\u018E" +
		"\x03\x02\x02\x02\u018D\u018B\x03\x02\x02\x02\u018E\u018F\x07,\x02\x02" +
		"\u018F\u0190\x071\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191\u0192\b>\x02" +
		"\x02\u0192|\x03\x02\x02\x02\u0193\u0195\t\x06\x02\x02\u0194\u0193\x03" +
		"\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196\u0194\x03\x02\x02\x02\u0196" +
		"\u0197\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u0199\b?\x02" +
		"\x02\u0199~\x03\x02\x02\x02\r\x02\xF7\u0105\u010A\u0167\u016D\u0174\u0176" +
		"\u017E\u018B\u0196\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TntLexer.__ATN) {
			TntLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TntLexer._serializedATN));
		}

		return TntLexer.__ATN;
	}

}

