function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n2 = 0, F = function F() {}; return { s: F, n: function n() { return _n2 >= r.length ? { done: !0 } : { done: !1, value: r[_n2++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function () {
  var e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  var _iterator = _createForOfIteratorHelper(document.querySelectorAll('link[rel="modulepreload"]')),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var o = _step.value;
      n(o);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  new MutationObserver(o => {
    var _iterator2 = _createForOfIteratorHelper(o),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var r = _step2.value;
        if (r.type === "childList") {
          var _iterator3 = _createForOfIteratorHelper(r.addedNodes),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var c = _step3.value;
              c.tagName === "LINK" && c.rel === "modulepreload" && n(c);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }).observe(document, {
    childList: !0,
    subtree: !0
  });
  function t(o) {
    var r = {};
    return o.integrity && (r.integrity = o.integrity), o.referrerPolicy && (r.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? r.credentials = "include" : o.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
  }
  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    var r = t(o);
    fetch(o.href, r);
  }
})();
var d = {
  P: 101.325,
  R: 8.3144621,
  M_air: 28.96546,
  L: {
    0: 45.064,
    15: 44.431,
    "15.55": 44.408,
    20: 44.222,
    25: 44.013
  },
  u_L: .004,
  Z_air: {
    0: .999419,
    15: .999595,
    "15.55": .999601,
    20: .999645
  },
  A: {
    carbon: {
      value: 12.0107,
      u: 4e-4
    },
    hydrogen: {
      value: 1.00794,
      u: 35e-6
    },
    nitrogen: {
      value: 14.0067,
      u: 1e-4
    },
    oxygen: {
      value: 15.9994,
      u: 15e-5
    },
    sulfur: {
      value: 32.065,
      u: .0025
    },
    helium: {
      value: 4.002602,
      u: 1e-6
    },
    neon: {
      value: 20.1797,
      u: 3e-4
    },
    argon: {
      value: 39.948,
      u: 5e-4
    }
  }
};
function I(a) {
  return Number(a) + 273.15;
}
function Z(a, e, t, n, o) {
  var r = t - o,
    c = o - a,
    i = t - a;
  return e * r / i + n * c / i;
}
var S = `1; methane;methane;16,04246;0,000423792;1;4;0;0;0;;0,04886;0,04452;0,04437;0,04317;0,0005;;892,92;891,51;891,46;891,05;890,58;0,19
2; ethane;ethane;30,06904;0,000827103;2;6;0;0;0;;0,0997;0,0919;0,0916;0,0895;0,0011;;1564,35;1562,14;1562,06;1561,42;1560,69;0,51
3; propane;propane;44,09562;0,001232234;3;8;0;0;0;;0,1465;0,1344;0,134;0,1308;0,0016;;2224,03;2221,1;2220,99;2220,13;2219,17;0,51
4; n?butane;n?butane;58,1222;0,001637834;4;10;0;0;0;;0,2022;0,184;0,1834;0,1785;0,0039;;2883,35;2879,76;2879,63;2878,58;2877,4;0,72
5; 2?methylpropane;2?methylpropane;58,1222;0,001637834;4;10;0;0;0;;0,1885;0,1722;0,1717;0,1673;0,0031;;2874,21;2870,58;2870,45;2869,39;2868,2;0,72
6; n?pentane;n?pentane;72,14878;0,002043624;5;12;0;0;0;;0,2586;0,2361;0,2354;0,2295;0,0107;;3542,91;3538,6;3538,45;3537,19;3535,77;0,23
7; 2?methylbutane;2?methylbutane;72,14878;0,002043624;5;12;0;0;0;;0,2458;0,2251;0,2244;0,2189;0,0088;;3536,01;3531,68;3531,52;3530,25;3528,83;0,23
8; 2,2?dimethylpropane;2,2?dimethylpropane;72,14878;0,002043624;5;12;0;0;0;;0,2245;0,204;0,2033;0,1979;0,006;;3521,75;3517,44;3517,28;3516,02;3514,61;0,25
9; n?hexane;n?hexane;86,17536;0,00244951;6;14;0;0;0;;0,3319;0,3001;0,299;0,2907;0,0271;;4203,24;4198,24;4198,06;4196,6;4194,95;0,32
10; 2?methylpentane;2?methylpentane;86,17536;0,00244951;6;14;0;0;0;;0,3114;0,2826;0,2816;0,274;0,0221;;4195,64;4190,62;4190,44;4188,97;4187,32;0,53
11; 3?methylpentane;3?methylpentane;86,17536;0,00244951;6;14;0;0;0;;0,2997;0,2762;0,2754;0,269;0,0234;;4198,27;4193,22;4193,04;4191,56;4189,9;0,53
12; 2,2?dimethylbutane;2,2?dimethylbutane;86,17536;0,00244951;6;14;0;0;0;;0,253;0,235;0,2344;0,2295;0,0173;;4185,86;4180,83;4180,65;4179,17;4177,52;0,48
13; 2,3?dimethylbutane;2,3?dimethylbutane;86,17536;0,00244951;6;14;0;0;0;;0,2836;0,2632;0,2625;0,2569;0,0207;;4193,68;4188,61;4188,43;4186,94;4185,28;0,46
14; n?heptane;n?heptane;100,20194;0,002855451;7;16;0;0;0;;0,4076;0,3668;0,3654;0,3547;0,1001;;4862,88;4857,18;4856,98;4855,31;4853,43;0,67
15; n?octane;n?octane;114,22852;0,003261426;8;18;0;0;0;;0,4845;0,4346;0,4329;0,4198;0,1002;;5522,41;5516,01;5515,78;5513,9;5511,8;0,76
16; n?nonane;n?nonane;128,2551;0,003667424;9;20;0;0;0;;0,5617;0,503;0,501;0,4856;0,1006;;6182,92;6175,82;6175,56;6173,48;6171,15;0,81
17; n?decane;n?decane;142,28168;0,004073438;10;22;0;0;0;;0,6713;0,5991;0,5967;0,5778;0,1006;;6842,69;6834,9;6834,62;6832,33;6829,77;0,87
18; ethene;ethene;28,05316;0,000812158;2;4;0;0;0;;0,0868;0,0799;0,0797;0,0778;0,001;;1413,55;1412,12;1412,07;1411,65;1411,18;0,21
19; propene;propene;42,07974;0,001218236;3;6;0;0;0;;0,1381;0,1267;0,1263;0,1232;0,0016;;2061,57;2059,43;2059,35;2058,73;2058,02;0,34
20; 1?butene;1?butene;56,10632;0,001624315;4;8;0;0;0;;0,1964;0,1776;0,177;0,1721;0,0041;;2721,57;2718,71;2718,6;2717,76;2716,82;0,39
21; cis?2?butene;cis?2?butene;56,10632;0,001624315;4;8;0;0;0;;0,2075;0,187;0,1863;0,181;0,0045;;2714,88;2711,94;2711,83;2710,97;2710;0,5
22; trans?2?butene;trans?2?butene;56,10632;0,001624315;4;8;0;0;0;;0,2072;0,1868;0,1862;0,1809;0,0043;;2711,09;2708,26;2708,16;2707,33;2706,4;0,47
23; 2?methylpropene;2?methylpropene;56,10632;0,001624315;4;8;0;0;0;;0,1966;0,1777;0,177;0,1721;0,0037;;2704,88;2702,06;2701,96;2701,13;2700,2;0,42
24;1?pentene;1?pentene;70,1329;0,002030394;5;10;0;0;0;;0,2622;0,2297;0,2287;0,2208;0,0102;;3381,32;3377,76;3377,63;3376,59;3375,42;0,73
25;propadiene;propadiene;40,06386;0,001208139;3;4;0;0;0;;0,1417;0,1313;0,131;0,1282;0,0025;;1945,26;1943,97;1943,92;1943,54;1943,11;0,6
26; 1,2?butadiene;1,2?butadiene;54,09044;0,001613722;4;6;0;0;0;;0,2063;0,1862;0,1855;0,1803;0,011;;2597,15;2595,12;2595,05;2594,46;2593,79;0,4
27; 1,3?butadiene;1,3?butadiene;54,09044;0,001613722;4;6;0;0;0;;0,1993;0,1739;0,1731;0,1673;0,0038;;2544,14;2542,11;2542,03;2541,44;2540,77;0,41
28; ethyne;ethyne;26,03728;0,000803057;2;2;0;0;0;;0,0936;0,0836;0,0833;0,0808;0,0024;;1301,86;1301,37;1301,35;1301,21;1301,05;0,32
29; cyclopentane;cyclopentane;70,1329;0,002030394;5;10;0;0;0;;0,2409;0,2221;0,2215;0,2164;0,0137;;3326,14;3322,19;3322,05;3320,89;3319,59;0,36
30; methylcyclopentane;methylcyclopentane;84,15948;0,002436473;6;12;0;0;0;;0,2817;0,2612;0,2605;0,2548;0,0262;;3977,05;3972,46;3972,29;3970,95;3969,44;0,56
31; ethylcyclopentane;ethylcyclopentane;98,18606;0,002842552;7;14;0;0;0;;0,4227;0,3684;0,3666;0,3531;0,1006;;4637,2;4631,93;4631,74;4630,2;4628,47;0,71
32; cyclohexane;cyclohexane;84,15948;0,002436473;6;12;0;0;0;;0,2939;0,2686;0,2677;0,261;0,0325;;3960,68;3956,02;3955,85;3954,49;3952,96;0,32
33; methylcyclohexane;methylcyclohexane;98,18606;0,002842552;7;14;0;0;0;;0,3667;0,3317;0,3305;0,3213;0,0668;;4609,33;4604,08;4603,89;4602,36;4600,64;0,71
34; ethylcyclohexane;ethylcyclohexane;112,21264;0,00324863;8;16;0;0;0;;0,5275;0,4547;0,4524;0,4345;0,1006;;5272,76;5266,9;5266,69;5264,97;5263,05;0,95
35; benzene;benzene;78,11184;0,00240917;6;6;0;0;0;;0,2752;0,2527;0,252;0,246;0,0274;;3305,12;3302,9;3302,81;3302,16;3301,43;0,27
36; toluene;toluene;92,13842;0,002813965;7;8;0;0;0;;0,3726;0,3359;0,3347;0,3251;0,1002;;3952,77;3949,83;3949,72;3948,86;3947,89;0,51
37; ethylbenzene;ethylbenzene;106,165;0,003219084;8;10;0;0;0;;0,4129;0,3797;0,3785;0,3694;0,1002;;4613,16;4609,54;4609,4;4608,34;4607,15;0,66
38; o?xylene;o?xylene;106,165;0,003219084;8;10;0;0;0;;0,4852;0,4411;0,4396;0,4277;0,1004;;4602,18;4598,64;4598,52;4597,48;4596,31;0,76
39; methanol;methanol;32,04186;0,000449555;1;4;0;1;0;;0,5806;0,4464;0,4423;0,4117;0,0233;;766,6;765,09;765,03;764,59;764,09;0,13
40; methanethiol;methanethiol;48,10746;0,002535666;1;4;0;0;1;;0,1909;0,17;0,1693;0,164;0,0117;;1241,64;1240,28;1240,23;1239,84;1239,39;0,32
41; hydrogen;hydrogen;2,01588;0,00007;0;2;0;0;0;;-0,01;-0,01;-0,01;-0,01;0,025;;286,64;286,15;286,13;285,99;285,83;0,02
42; water;water;18,01528;0,000165529;0;2;0;1;0;;0,3093;0,2562;0,2546;0,2419;0,015;;45,064;44,431;44,408;44,222;44,013;0,004
43; hydrogen sulfide;hydrogen sulfide;34,08088;0,00250098;0;2;0;0;1;;0,1006;0,0923;0,092;0,0898;0,0023;;562,93;562,38;562,36;562,19;562,01;0,23
44; ammonia;ammonia;17,03052;0,000145;0;3;1;0;0;;0,123;0,11;0,1096;0,1062;0,0021;;384,57;383,51;383,47;383,16;382,81;0,18
45; hydrogen cyanide;hydrogen cyanide;27,02534;0,000413793;1;1;1;0;0;;0,3175;0,2765;0,2751;0,2644;0,0076;;671,92;671,67;671,66;671,58;671,5;1,26
46; carbon monoxide;carbon monoxide;28,0101;0,0004272;1;0;0;1;0;;0,0258;0,0217;0,0215;0,0203;0,001;;282,8;282,91;282,91;282,95;282,98;0,06
47; carbonyl sulfide;carbonyl sulfide;60,0751;0,002536237;1;0;0;1;1;;0,1211;0,1114;0,111;0,1084;0,0054;;548,01;548,14;548,15;548,19;548,23;0,24
48; carbon disulfide;carbon disulfide;76,1407;0,005015974;1;0;0;0;2;;0,2182;0,1958;0,1951;0,1894;0,0098;;1104,05;1104,32;1104,33;1104,4;1104,49;0,43
49; helium;helium;4,002602;0,000001;0;0;0;0;0;;-0,01;-0,01;-0,01;-0,01;0,025;;;;;;;
50; neon;neon;20,1797;0,0003;0;0;0;0;0;;-0,01;-0,01;-0,01;-0,01;0,025;;;;;;;
51; argon;argon;39,948;0,0005;0;0;0;0;0;;0,0307;0,0273;0,0272;0,0262;0,001;;;;;;;
52; nitrogen;nitrogen;28,0134;0,0002;0;0;2;0;0;;0,0214;0,017;0,0169;0,0156;0,001;;;;;;;
53; oxygen;oxygen;31,9988;0,0003;0;0;0;2;0;;0,0311;0,0276;0,0275;0,0265;0,001;;;;;;;
54; carbon dioxide;carbon dioxide;44,0095;0,0005;1;0;0;2;0;;0,0821;0,0752;0,0749;0,073;0,002;;;;;;;
55; sulfur dioxide;sulfur dioxide;64,0638;0,002517936;0;0;0;2;1;;0,1579;0,1406;0,14;0,1356;0,0035;;;;;;;
56; n-undecane;n-undecane;156,30826;0,004479464;11;24;0;0;0;;0,7228;0,6402;0,6374;0,6159;0,1006;;7502,22;7493,73;7493,42;7490,93;7488,14;1,54
57; n-dodecane;n-dodecane;170,33484;0,004885499;12;26;0;0;0;;0,8567;0,7615;0,7583;0,7335;0,1006;;8162,43;8153,24;8152,91;8150,21;8147,19;1,13
58; n-tridecane;n-tridecane;184,36142;0,00529154;13;28;0;0;0;;0,9129;0,8061;0,8026;0,7748;0,1006;;8821,88;8811,99;8811,63;8808,73;8805,48;1,21
59; n-tetradecane;n-tetradecane;198,388;0,005697587;14;30;0;0;0;;1,0135;0,894;0,89;0,8589;0,1006;;9481,71;9471,12;9470,73;9467,63;9464,15;1,32
60; n-pentadecane;n-pentadecane;212,41458;0,006103638;15;32;0;0;0;;1,1176;0,9849;0,9804;0,9459;0,1006;;10141,65;10130,23;10129,82;10126,52;10122,82;1,44`,
  V = S.split(`
`),
  s = V.map(a => a.split(";")),
  O = {
    methane: {
      lfl: 5.28,
      ufl: 15.5
    },
    ethane: {
      lfl: 3.07,
      ufl: 14.95
    },
    propane: {
      lfl: 2.31,
      ufl: 9.5
    },
    "n-butane": {
      lfl: 1.8,
      ufl: 8.5
    },
    get "2-methylpropane"() {
      return this["n-butane"];
    },
    "n-pentane": {
      lfl: 1.47,
      ufl: 8
    },
    get "2-methylbutane"() {
      return this["n-pentane"];
    },
    get "2,2-dimethylpropane"() {
      return this["n-pentane"];
    },
    "n-hexane": {
      lfl: 1.24,
      ufl: 6
    }
  },
  z = ["methane", "ethane", "propane", "n-butane", "2-methylpropane", "n-pentane", "2-methylbutane", "2,2-dimethylpropane", "n-hexane", "2-methylpentane", "3-methylpentane", "2,2-dimethylbutane", "2,3-dimethylbutane", "n-heptane", "n-octane", "n-nonane", "n-decane", "ethene", "propene", "1-butene", "cis-2-butene", "trans-2-butene", "2-methylpropene", "1-pentene", "propadiene", "1,2-butadiene", "1,3-butadiene", "ethyne", "cyclopentane", "methylcyclopentane", "ethylcyclopentane", "cyclohexane", "methylcyclohexane", "ethylcyclohexane", "benzene", "toluene", "ethylbenzene", "o-xylene", "methanol", "methanethiol", "hydrogen", "water", "hydrogen sulfide", "ammonia", "hydrogen cyanide", "carbon monoxide", "carbonyl sulfide", "carbon disulfide", "helium", "neon", "argon", "nitrogen", "oxygen", "carbon dioxide", "sulfur dioxide", "n-undecane", "n-dodecane", "n-tridecane", "n-tetradecane", "n-pentadecane"],
  R = z.map((a, e) => ({
    name: a,
    M: Number(s[e][3].replace(",", ".")),
    Hc_G: {
      0: Number(s[e][17].replace(",", ".")),
      15: Number(s[e][18].replace(",", ".")),
      "15.55": Number(s[e][19].replace(",", ".")),
      20: Number(s[e][20].replace(",", ".")),
      25: Number(s[e][21].replace(",", "."))
    },
    u_Hc_G: Number(s[e][22].replace(",", ".")),
    a: Number(s[e][5]),
    b: Number(s[e][6]),
    c: Number(s[e][7]),
    d: Number(s[e][8]),
    e: Number(s[e][9]),
    s: {
      0: Number(s[e][11].replace(",", ".")),
      15: Number(s[e][12].replace(",", ".")),
      "15.55": Number(s[e][13].replace(",", ".")),
      20: Number(s[e][14].replace(",", "."))
    },
    flamability: O[a]
  }));
console.log(R);
var f = d.A;
function K(a) {
  return R.find(e => e.name === a);
}
function W(a) {
  return a.map(e => _objectSpread(_objectSpread(_objectSpread({}, e), K(e.name)), {}, {
    get uM2() {
      return Math.pow(this.a * f.carbon.u, 2) + Math.pow(this.b * f.hydrogen.u, 2) + Math.pow(this.c * f.nitrogen.u, 2) + Math.pow(this.d * f.oxygen.u, 2) + Math.pow(this.e * f.sulfur.u, 2);
    },
    get uM() {
      return Math.sqrt(this.uM2);
    }
  }));
}
class v {
  constructor(e, t, n) {
    this.components = W(e), this.combT = t, this.metT = n;
  }
  get Hc_G() {
    return this.components.reduce((e, t) => e + t.value * t.Hc_G[this.combT], 0);
  }
  get Hc_N() {
    return this.Hc_G - this.components.reduce((e, t) => e + t.value * t.b / 2 * d.L[this.combT], 0);
  }
  get M() {
    return this.components.reduce((e, t) => e + t.value * t.M, 0);
  }
  get Hm_G() {
    return this.Hc_G / this.M;
  }
  get Hm_N() {
    return this.Hc_N / this.M;
  }
  get s() {
    return this.components.reduce((e, t) => e + t.value * t.s[this.metT], 0);
  }
  get Z() {
    return 1 - Math.pow(this.s, 2);
  }
  get V0() {
    return d.R * I(this.metT) / d.P;
  }
  get V() {
    return this.Z * d.R * I(this.metT) / d.P;
  }
  get Hv_G() {
    return this.Hc_G / this.V;
  }
  get Hv_N() {
    return this.Hc_N / this.V;
  }
  get G() {
    return this.M * d.Z_air[this.metT] / d.M_air / this.Z;
  }
  get D() {
    return this.M / this.V0 / this.Z;
  }
  get W_G() {
    return this.Hv_G / Math.sqrt(this.G);
  }
  get W_N() {
    return this.Hv_N / Math.sqrt(this.G);
  }
  get Z30() {
    return 1 - 30 / 1 * Math.pow(this.s, 2);
  }
  get K_et() {
    var e = this.components.find(n => n.name === "methane").value,
      t = this.components.find(n => n.name === "ethane").value;
    return Math.round(e / t);
  }
  get K_pr() {
    var e = this.components.find(n => n.name === "methane").value,
      t = this.components.find(n => n.name === "propane").value;
    return Math.round(e / t);
  }
  get lfl() {
    var e = 1 / this.components.reduce((t, n) => {
      var o;
      return t + ((o = n.flamability) != null && o.lfl ? n.value / n.flamability.lfl : 0);
    }, 0);
    return Number(e.toFixed(1));
  }
  get ufl() {
    var e = 1 / this.components.reduce((t, n) => {
      var o;
      return t + ((o = n.flamability) != null && o.ufl ? n.value / n.flamability.ufl : 0);
    }, 0);
    return Number(e.toFixed(1));
  }
  get u_Hm_G() {
    var e = 0;
    var _iterator4 = _createForOfIteratorHelper(this.components),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var o = _step4.value;
        var _iterator7 = _createForOfIteratorHelper(this.components),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var r = _step7.value;
            e += (o.Hc_G[this.combT] / this.Hc_G - o.M / this.M) * o.uncertainty * +(o.name === r.name) * (r.Hc_G[this.combT] / this.Hc_G - r.M / this.M) * r.uncertainty;
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var t = 0;
    var _iterator5 = _createForOfIteratorHelper(this.components),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _o = _step5.value;
        t += Math.pow(_o.value, 2) * Math.pow(_o.u_Hc_G, 2);
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    t /= Math.pow(this.Hc_G, 2);
    var n = 0;
    var _iterator6 = _createForOfIteratorHelper(this.components),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _o2 = _step6.value;
        var _iterator8 = _createForOfIteratorHelper(this.components),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _r = _step8.value;
            n += _o2.value * _o2.uM * +(_o2.name === _r.name) * _r.value * _r.uM;
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    return n /= Math.pow(this.M, 2), Math.sqrt(e + t + n) * this.Hm_G;
  }
  get u_Hm_N() {
    var e = 0;
    var _iterator9 = _createForOfIteratorHelper(this.components),
      _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var c = _step9.value;
        var _iterator13 = _createForOfIteratorHelper(this.components),
          _step13;
        try {
          for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
            var i = _step13.value;
            e += ((c.Hc_G[this.combT] - d.L[this.combT] / 2 * c.b) / this.Hc_N - c.M / this.M) * c.uncertainty * +(c.name === i.name) * ((i.Hc_G[this.combT] - d.L[this.combT] / 2 * i.b) / this.Hc_N - i.M / this.M) * i.uncertainty;
          }
        } catch (err) {
          _iterator13.e(err);
        } finally {
          _iterator13.f();
        }
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    var t = 0;
    var _iterator10 = _createForOfIteratorHelper(this.components),
      _step10;
    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var _c = _step10.value;
        t += Math.pow(_c.value, 2) * Math.pow(_c.u_Hc_G, 2);
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
    t /= Math.pow(this.Hc_N, 2);
    var n = 0;
    var _iterator11 = _createForOfIteratorHelper(this.components),
      _step11;
    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var _c2 = _step11.value;
        var _iterator14 = _createForOfIteratorHelper(this.components),
          _step14;
        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var _i = _step14.value;
            n += _c2.value * _c2.uM * +(_c2.name === _i.name) * _i.value * _i.uM;
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
    n /= Math.pow(this.M, 2);
    var o = 0;
    var _iterator12 = _createForOfIteratorHelper(this.components),
      _step12;
    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var _c3 = _step12.value;
        o += _c3.value * _c3.b;
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
    var r = Math.pow(o / 2 / this.Hc_N, 2) * Math.pow(d.u_L, 2);
    return Math.sqrt(e + t + n + r) * this.Hm_N;
  }
  get u_Hv_G() {
    var e = 0;
    var t = Math.sqrt(1 - this.Z);
    var _iterator15 = _createForOfIteratorHelper(this.components),
      _step15;
    try {
      for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
        var r = _step15.value;
        var _iterator18 = _createForOfIteratorHelper(this.components),
          _step18;
        try {
          for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
            var c = _step18.value;
            e += (r.Hc_G[this.combT] / this.Hc_G + 2 * r.s[this.metT] * t / this.Z) * r.uncertainty * +(r.name === c.name) * (c.Hc_G[this.combT] / this.Hc_G + 2 * c.s[this.metT] * t / this.Z) * c.uncertainty;
          }
        } catch (err) {
          _iterator18.e(err);
        } finally {
          _iterator18.f();
        }
      }
    } catch (err) {
      _iterator15.e(err);
    } finally {
      _iterator15.f();
    }
    var n = 0;
    var _iterator16 = _createForOfIteratorHelper(this.components),
      _step16;
    try {
      for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
        var _r2 = _step16.value;
        n += Math.pow(_r2.value, 2) * Math.pow(_r2.u_Hc_G, 2);
      }
    } catch (err) {
      _iterator16.e(err);
    } finally {
      _iterator16.f();
    }
    n /= Math.pow(this.Hc_G, 2);
    var o = 0;
    var _iterator17 = _createForOfIteratorHelper(this.components),
      _step17;
    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
        var _r3 = _step17.value;
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }
    return o /= Math.pow(this.M, 2), Math.sqrt(e + n + o) * this.Hm_G;
  }
}
var j = [0, 1, 5, 10, 20, 30, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 50, 60, 70, 80, 90, 99, 100],
  U = [14810, 14080, 11550, 9060, 5662, 3608, 3301.9, 3178, 3059.2, 2945.5, 2836.4, 2731.9, 2631.7, 2535.7, 2443.5, 2355.1, 2270.3, 2188.9, 2110.8, 2035.8, 1703.1, 1206.3, 867.44, 632.68, 467.66, 360.15, 350.06],
  L = [1.139, 1.195, 1.436, 1.807, 2.785, 4.224, 4.579],
  F = [.958, 1.01, 1.241, 1.599, 2.61, 4.178, 4.579],
  N = j.map((a, e) => _objectSpread(_objectSpread(_objectSpread({
    dewPoint: a,
    k: U[e]
  }, L[e] ? {
    water: L[e]
  } : null), F[e] ? {
    ice: F[e]
  } : null), {}, {
    get dewPointC() {
      return ((this.dewPoint - 32) / 1.8).toFixed(1);
    },
    calculateHumidity(t) {
      var n = 1 / this.k;
      return this.ice && (n = n * this.water / this.ice), n * 1e6 * 14.7 / t * (460 + this.dewPoint) / 520 * 16.0185;
    }
  })),
  J = [-40, -30, -20, -10, 0],
  X = [131, 230, 390, 648, 1050],
  Q = [.22, .33, .48, .69, .97],
  b = J.map((a, e) => ({
    dewPoint: a,
    A: X[e],
    B: Q[e],
    get dewPointC() {
      return ((this.dewPoint - 32) / 1.8).toFixed(1);
    },
    calculateHumidity(t, n = 1) {
      return (this.A / t + this.B) * n * 16.0185;
    }
  }));
function Y(a) {
  var e = N[0],
    t = b[b.length - 1];
  return e.calculateHumidity(a) / t.calculateHumidity(a);
}
var q = [...b];
q.pop();
var u = [...q, ...N];
console.log(u);
function k(a, e) {
  var t = (Number(e) + .101325) * 1e3 / 6.89475729,
    n = Y(t);
  var o = u.findIndex(h => h.calculateHumidity(t, n) >= a);
  var r = u.length - 1;
  o < 0 && (o = r);
  var c = u[o],
    i = c.calculateHumidity(t, n);
  return console.log(o, c), console.log(c.calculateHumidity(t, n)), i === a ? c.dewPointC : o === 0 ? `< ${c.dewPointC}` : (console.log(u[o - 1]), Z(u[o - 1].calculateHumidity(t, n), u[o - 1].dewPointC, i, c.dewPointC, a).toFixed(1));
}
function e0(a) {
  var e = 568.547932163686;
  a = isNaN(a) || a === "" ? -40 : Number(a);
  var t = a * 1.8 + 32;
  t < -40 && (t = -40), console.log(a, t);
  var n = N[0],
    o = b[b.length - 1],
    r = u.length - 1,
    c = n.calculateHumidity(e) / o.calculateHumidity(e);
  var i = u.findIndex(y => y.dewPoint >= t);
  i < 0 && (i = r);
  var h = u[i];
  return console.log(i, h), h.dewPoint === t ? h.calculateHumidity(e, c) : Z(u[i - 1].dewPoint, u[i - 1].calculateHumidity(e, c), h.dewPoint, h.calculateHumidity(e, c), t);
}
var t0 = document.getElementById("corrected-data-body");
function n0(a) {
  console.log(a);
  var e = a.reduce((t, n) => t + `<tr>
                <th>${n.label}</th>
                <td>${(n.value * 100).toFixed(4)}</td>
            </tr>`, "");
  t0.innerHTML = e;
}
var o0 = document.getElementById("report-body"),
  H = [["Масова теплота згоряння, вища", "Hm_G"], ["Масова теплота згоряння, нижча", "Hm_N"], ["Об'ємна теплота згоряння, вища", "Hv_G"], ["Об'ємна теплота згоряння, нижча", "Hv_N"], ["Відносна густина", "G"], ["Густина", "D"], ["Число Воббе, вище", "W_G"], ["Число Воббе, нижче", "W_N"], ["Коефіцієнт реального газу (30 атм)", "Z30"], ["Коефіцієнт вмісту газу (за етаном)", "K_et"], ["Коефіцієнт вмісту газу (за пропаном)", "K_pr"], ["НКМ", "lfl"], ["ВКМ", "ufl"]],
  a0 = a => (a * 2).toPrecision(2);
function P(a, e) {
  var n;
  var t = (n = e.split(".")[1]) == null ? void 0 : n.length;
  return a.toFixed(t);
}
function r0(a) {
  var e = H.reduce((t, n) => {
    var _n = _slicedToArray(n, 2),
      o = _n[0],
      r = _n[1],
      c = a0(a[`u_${r}`] || .01);
    return P(a[r], c), t + `<tr>
                <th>${o}</th>
                <td>${P(a[r], c)}</td>
                <td>${c}</td>
            </tr>`;
  }, "");
  o0.innerHTML = e;
}
var c0 = document.getElementById("wet-report-body"),
  i0 = document.getElementById("wet-diff-body");
function s0(a, e) {
  var t = H.reduce((o, r) => o + `<tr>
            <th>${r[0]}</th>
            <td>${parseFloat(a[r[1]].toFixed(5))}</td>
        </tr>`, "");
  c0.innerHTML = t;
  var n = H.reduce((o, r) => {
    var c = e[r[1]] - a[r[1]],
      i = c / e[r[1]] * 100;
    return o + `<tr>
            <td>${parseFloat(c.toFixed(5))}</td>
            <td>${parseFloat(i.toFixed(4))}%</td>
        </tr>`;
  }, "");
  i0.innerHTML = n;
}
var M = document.getElementById("combustuion-t"),
  G = document.getElementById("metering-t"),
  B = document.getElementById("humidity-toggler"),
  E = document.getElementById("humidity-data"),
  w = document.getElementById("dew-point"),
  l0 = document.getElementById("water-content"),
  _ = document.getElementById("dp-pressure"),
  u0 = document.getElementById("secondary-dew-point"),
  $ = document.getElementById("corrected-data"),
  d0 = document.getElementById("total-control"),
  C = document.getElementById("dry-report"),
  D = document.getElementById("main-input");
_.style.width = _.value.length + .5 + "ch";
B.addEventListener("change", () => {
  B.checked ? (E.classList.remove("hidden"), $.classList.remove("hidden"), C.classList.add("hidden"), D.classList.add("no-print")) : (E.classList.add("hidden"), $.classList.add("hidden"), C.classList.remove("hidden"), D.classList.remove("no-print"));
});
function h0(a, e) {
  var t = w.value === "" ? 0 : e0(w.value);
  console.log(t);
  var n = k(t, _.value);
  console.log(n), u0.innerText = n;
  var o = t / 18 / 1e3,
    r = new v(a, "15.55", "15.55"),
    c = r.D * 1e3 / r.M,
    i = o / c,
    h = 1 - i,
    y = a.map(x => _objectSpread(_objectSpread({}, x), {}, {
      value: x.value * h
    }));
  y.push({
    name: "water",
    label: "вода",
    value: i
  }), n0(y);
  var g = new v(y, M.value, G.value),
    A = 1e3 / g.V,
    T = i * A * 18 * 1e3;
  console.log("m", T), l0.innerText = Math.round(T), console.log("wet:", g), console.log(g.components), s0(g, e);
}
function p() {
  var a = m.map(n => _objectSpread(_objectSpread({}, n), {}, {
    value: n.value / 100 || 0,
    uncertainty: n.uncertainty / 2 / 100 || 0
  }));
  console.log(a);
  var e = a.reduce((n, o) => n + o.value, 0) * 100;
  d0.innerText = `${e.toFixed(4)}`;
  var t = new v(a, M.value, G.value);
  console.log("dry:", t), r0(t), console.log(t.u_Hm_G), console.log(t.u_Hm_N), h0(a, t);
}
M.addEventListener("input", p);
G.addEventListener("input", p);
w.addEventListener("input", p);
_.addEventListener("input", p);
var m0 = document.getElementById("main-input-body");
class l {
  constructor(e, t, n, o) {
    this.name = e, this.label = t, this.value = n || "", this.uncertainty = o;
  }
}
var m = [new l("methane", "метан", 86.64, .26), new l("ethane", "етан", 5.8, .23), new l("propane", "пропан", 1.58, .1), new l("n-butane", "н-бутан", .269, .016), new l("2-methylpropane", "2-метилпропан", .147, .009), new l("n-pentane", "н-пентан", .069, .004), new l("2-methylbutane", "2-метилбутан", .073, .005), new l("2,2-dimethylpropane", "2,2-диметилпропан", .0052, .001), new l("n-hexane", "н-гексан", .061, .004), new l("nitrogen", "азот", 1.93, .08), new l("carbon dioxide", "вуглекислий газ", 3.4, .21), new l("oxygen", "кисень", .0164, .0022)];
console.log(m);
function p0() {
  var a = m.reduce((e, t, n) => e + `<tr>
                <th>${t.label}</th>
                <td class="td-input">
                    <input
                        type="text"
                        class="table-input"
                        name="${t.name}"
                        oninput="handleInput(event, ${n})"
                        style="width: ${String(t.value).length + .5}ch"
                        value="${t.value}"
                    >
                </td>
            </tr>`, "");
  m0.innerHTML = a;
}
window.handleInput = (a, e) => {
  console.log(a.target.name), console.log(a.target.value), a.target.style.width = a.target.value.length + .5 + "ch", m[e].value = a.target.value, console.log(m), localStorage.setItem("inputData", JSON.stringify(m)), p();
};
p0();
p();