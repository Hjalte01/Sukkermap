class Arrays{
    constructor(){

    }

    aStarArray(){
        
        //Kendte steder
        arrayTemp[0]  = new spot(522, 273, "administrationen", "stue");
        arrayTemp[1]  = new spot(699, 414, "atriumgården", "stue");
        arrayTemp[2]  = new spot(681, 468, "auditoriet", "3 sal");
        arrayTemp[3]  = new spot(92, 110,  "biografen", "3 sal");
        arrayTemp[4]  = new spot(790, 448, "biologi", "stue");
        arrayTemp[5]  = new spot(790, 448, "fysik", "stue");
        arrayTemp[6]  = new spot(790, 448, "kemi", "stue");
        arrayTemp[7]  = new spot(500, 101,  "metalværstedet", "stue");
        arrayTemp[8]  = new spot(577, 373, "studievejledning", "stue");
        arrayTemp[9]  = new spot(465, 268, "træværkstedet", "stue");
        arrayTemp[10] = new spot(291, 267, "tårnet", "stue");
        //lokaler på stuen
        arrayTemp[11] = new spot(853, 371, "1", "stue");
        arrayTemp[12] = new spot(845, 361, "2", "stue");
        arrayTemp[13] = new spot(821, 324, "3", "stue");
        arrayTemp[14] = new spot(463, 101, "36", "stue");
        arrayTemp[15] = new spot(500, 100, "37", "stue");
        arrayTemp[16] = new spot(559, 101, "38", "stue");
        arrayTemp[17] = new spot(642, 172, "39", "stue");
        arrayTemp[18] = new spot(1013, 483, "71", "stue");
        arrayTemp[19] = new spot(917, 473, "73", "stue");
        arrayTemp[20] = new spot(862, 473, "74", "stue");
        arrayTemp[21] = new spot(831, 473, "74a", "stue");
        arrayTemp[22] = new spot(785, 489, "75", "stue");
        arrayTemp[23] = new spot(723, 474, "76", "stue");
        arrayTemp[24] = new spot(675, 482, "77", "stue");
        arrayTemp[25] = new spot(591, 483, "78", "stue");
        arrayTemp[26] = new spot(465, 268, "81", "stue");
        // 1. sal
        arrayTemp[27] = new spot(752, 328, "103", "1. sal");
        arrayTemp[28] = new spot(804, 319, "105", "1. sal");
        arrayTemp[29] = new spot(768, 310, "106", "1. sal");
        arrayTemp[30] = new spot(737, 294, "107a", "1. sal");
        arrayTemp[31] = new spot(701, 231, "110", "1. sal");
        arrayTemp[32] = new spot(697, 202, "112", "1. sal");
        arrayTemp[33] = new spot(686, 186, "113", "1. sal");
        arrayTemp[34] = new spot(617, 207, "115", "1. sal");
        arrayTemp[35] = new spot(599, 203, "116", "1. sal");
        arrayTemp[36] = new spot(599, 192, "118", "1. sal");
        arrayTemp[37] = new spot(647, 292, "126", "1. sal");
        arrayTemp[38] = new spot(646, 335, "127", "1. sal");
        arrayTemp[39] = new spot(599, 257, "128", "1. sal");
        arrayTemp[40] = new spot(617, 343, "129", "1. sal");
        arrayTemp[41] = new spot(603, 271, "130", "1. sal");
        arrayTemp[42] = new spot(522, 62, "142", "1. sal");
        arrayTemp[43] = new spot(443, 62, "143", "1. sal");
        arrayTemp[44] = new spot(412, 76, "144", "1. sal");
        arrayTemp[45] = new spot(531, 76, "145", "1. sal");
        arrayTemp[46] = new spot(607, 88, "147", "1. sal");
        arrayTemp[47] = new spot(240, 62, "151", "1. sal");
        arrayTemp[48] = new spot(78, 119, "152", "1. sal");
        arrayTemp[49] = new spot(83, 133, "153", "1. sal");
        arrayTemp[50] = new spot(240, 79, "154", "1. sal");
        arrayTemp[51] = new spot(1008, 483, "170", "1. sal");
        arrayTemp[52] = new spot(887, 474, "172", "1. sal");
        arrayTemp[53] = new spot(832, 490, "173", "1. sal");
        arrayTemp[54] = new spot(784, 473, "174", "1. sal");
        arrayTemp[55] = new spot(665, 482, "175", "1. sal");
        arrayTemp[56] = new spot(575, 480, "176", "1. sal");
        arrayTemp[57] = new spot(284, 296, "180", "1. sal");
        arrayTemp[58] = new spot(306, 326, "181", "1. sal");
        arrayTemp[59] = new spot(330, 326, "182", "1. sal");
        arrayTemp[60] = new spot(364, 293, "183", "1. sal");
        arrayTemp[61] = new spot(476, 287, "191", "1. sal");
        arrayTemp[62] = new spot(487, 330, "192", "1. sal");
        arrayTemp[63] = new spot(466, 319, "193", "1. sal");
        // 2. sal
        arrayTemp[64] = new spot(603, 187, "206", "2. sal");
        arrayTemp[65] = new spot(609, 201, "207", "2. sal");
        arrayTemp[66] = new spot(623, 211, "208", "2. sal");
        arrayTemp[67] = new spot(659, 181, "209", "2. sal");
        arrayTemp[68] = new spot(703, 204, "212", "2. sal");
        arrayTemp[69] = new spot(688, 186, "213", "2. sal");
        arrayTemp[70] = new spot(741, 291, "216", "2. sal");
        arrayTemp[71] = new spot(732, 279, "218", "2. sal");
        arrayTemp[72] = new spot(741, 304, "219", "2. sal");
        arrayTemp[73] = new spot(755, 334, "220", "2. sal");
        arrayTemp[74] = new spot(812, 320, "221", "2. sal");
        arrayTemp[75] = new spot(765, 312, "222", "2. sal");
        arrayTemp[76] = new spot(710, 287, "223", "2. sal");
        arrayTemp[77] = new spot(710, 301, "224", "2. sal");
        arrayTemp[78] = new spot(711, 333, "225", "2. sal");
        arrayTemp[79] = new spot(709, 343, "226", "2. sal");
        arrayTemp[80] = new spot(599, 88, "241", "2. sal");
        arrayTemp[81] = new spot(557, 88, "242", "2. sal");
        arrayTemp[82] = new spot(518, 87, "243", "2. sal");
        arrayTemp[83] = new spot(461, 88, "244", "2. sal");
        arrayTemp[84] = new spot(172, 67, "250", "2. sal");
        arrayTemp[85] = new spot(255, 61, "251", "2. sal");
        arrayTemp[86] = new spot(76, 122, "253", "2. sal");
        arrayTemp[87] = new spot(90, 131, "254", "2. sal");
        arrayTemp[88] = new spot(239, 77, "255", "2. sal");
        arrayTemp[89] = new spot(295, 296, "280", "2. sal");
        arrayTemp[90] = new spot(298, 331, "281", "2. sal");
        arrayTemp[91] = new spot(328, 338, "282", "2. sal");
        arrayTemp[92] = new spot(351, 266, "283", "2. sal");
        // 3. sal
        arrayTemp[93] = new spot(609, 180, "302", "3. sal");
        arrayTemp[94] = new spot(584, 172, "316a", "3. sal");
        arrayTemp[95] = new spot(602, 119, "341", "3. sal");
        arrayTemp[96] = new spot(723, 511, "373", "3. sal");
        arrayTemp[97] = new spot(704, 464, "374", "3. sal");
        arrayTemp[98] = new spot(908, 490, "375", "3. sal");
        arrayTemp[99] = new spot(889, 473, "376", "3. sal");
        arrayTemp[100] = new spot(879, 474, "377", "3. sal");
        arrayTemp[101] = new spot(744, 473, "378", "3. sal");
        arrayTemp[102] = new spot(293, 284, "380", "3. sal");
        arrayTemp[103] = new spot(294, 333, "381", "3. sal");
        arrayTemp[104] = new spot(368, 344, "382", "3. sal");
        arrayTemp[105] = new spot(359, 317, "383", "3. sal");
        // 4. sal
        arrayTemp[106] = new spot(304, 285, "480", "3. sal"); //4 sal, selvom tag'et er 3. sal
        //wc
        
        //printer

        //trappe
        arrayTemp[127] = new spot(278, 259, "trappe", "stue"); //tårn indgang
        arrayTemp[179] = new spot(278, 259, "trappe", "1. sal");
        arrayTemp[180] = new spot(278, 259, "trappe", "2. sal");
        arrayTemp[181] = new spot(278, 259, "trappe", "3. sal");
        arrayTemp[214] = new spot(390, 365, "trappe", "stue"); //tårn udgang
        arrayTemp[215] = new spot(390, 365, "trappe", "1. sal");
        arrayTemp[216] = new spot(390, 365, "trappe", "2. sal");
        arrayTemp[217] = new spot(390, 365, "trappe", "3. sal");
        arrayTemp[218] = new spot(304, 293, "trappe", "3. sal"); //tårn til 4. sal
        arrayTemp[141] = new spot(399, 99, "trappe", "stue"); //metalværksted / biologi
        arrayTemp[184] = new spot(399, 99, "trappe", "1. sal");
        arrayTemp[185] = new spot(399, 99, "trappe", "2. sal");
        arrayTemp[152] = new spot(630, 157, "trappe", "stue"); //3D printere
        arrayTemp[186] = new spot(630, 157, "trappe", "1. sal");
        arrayTemp[187] = new spot(630, 157, "trappe", "2. sal");
        arrayTemp[188] = new spot(630, 157, "trappe", "3. sal");
        arrayTemp[160] = new spot(690, 485, "trappe", "stue"); //fysik/kemi/biologi indgang
        arrayTemp[189] = new spot(690, 485, "trappe", "1. sal");
        arrayTemp[190] = new spot(690, 485, "trappe", "2. sal");
        arrayTemp[191] = new spot(690, 485, "trappe", "3. sal");
        arrayTemp[169] = new spot(961, 437, "trappe", "stue"); //fysik/kemi/biologi udgang primære
        arrayTemp[192] = new spot(961, 437, "trappe", "1. sal");
        arrayTemp[193] = new spot(961, 437, "trappe", "2. sal");
        arrayTemp[194] = new spot(961, 437, "trappe", "3. sal");
        arrayTemp[195] = new spot(550, 492, "trappe", "stue"); //fysik/kemi/biologi udgang sekundær
        arrayTemp[196] = new spot(550, 492, "trappe", "1. sal");
        arrayTemp[197] = new spot(550, 492, "trappe", "2. sal");
        arrayTemp[198] = new spot(550, 492, "trappe", "3. sal");
        arrayTemp[199] = new spot(533, 284, "trappe", "stue"); //adminstrationen
        arrayTemp[200] = new spot(533, 284, "trappe", "1. sal");
        arrayTemp[201] = new spot(742, 361, "trappe", "stue"); //lærerværelset
        arrayTemp[202] = new spot(742, 361, "trappe", "1. sal");
        arrayTemp[203] = new spot(742, 361, "trappe", "2. sal");
        arrayTemp[204] = new spot(742, 361, "trappe", "3. sal");
        arrayTemp[209] = new spot(734, 261, "trappe", "stue"); // imellem lærerværelset og lektiecafen
        arrayTemp[210] = new spot(734, 261, "trappe", "1. sal");
        arrayTemp[211] = new spot(734, 261, "trappe", "2. sal");
        arrayTemp[212] = new spot(734, 261, "trappe", "3. sal");
        arrayTemp[133] = new spot(279, 93, "trappe", "stue"); //biograf indgang
        arrayTemp[182] = new spot(279, 93, "trappe", "1. sal");
        arrayTemp[183] = new spot(279, 93, "trappe", "2. sal");
        arrayTemp[205] = new spot(62, 143, "trappe", "stue"); //biograf udgang
        arrayTemp[206] = new spot(62, 143, "trappe", "1. sal");
        arrayTemp[207] = new spot(62, 143, "trappe", "2. sal");
        arrayTemp[208] = new spot(62, 143, "trappe", "3. sal");
        arrayTemp[213] = new spot(136, 107, "trappe", "2. sal"); //til biografen


        //forbindinger mellem spotsne i stue
        arrayTemp[107] = new spot(595, 411, "binding", "stue");
        arrayTemp[108] = new spot(593, 373, "binding", "stue");
        arrayTemp[109] = new spot(592, 334, "binding", "stue");
        arrayTemp[110] = new spot(579, 334, "binding", "stue");
        arrayTemp[111] = new spot(571, 333, "binding", "stue");
        arrayTemp[112] = new spot(576, 324, "binding", "stue");
        arrayTemp[113] = new spot(575, 312, "binding", "stue");
        arrayTemp[114] = new spot(594, 308, "binding", "stue");
        arrayTemp[115] = new spot(612, 303, "binding", "stue");
        arrayTemp[116] = new spot(592, 259, "binding", "stue");
        arrayTemp[117] = new spot(535, 257, "binding", "stue");
        arrayTemp[118] = new spot(518, 257, "binding", "stue");
        arrayTemp[119] = new spot(464, 257, "binding", "stue");
        arrayTemp[120] = new spot(375, 255, "binding", "stue");
        arrayTemp[121] = new spot(335, 255, "binding", "stue");
        arrayTemp[122] = new spot(333, 266, "binding", "stue");
        arrayTemp[123] = new spot(306, 267, "binding", "stue");
        arrayTemp[124] = new spot(305, 280, "binding", "stue");
        arrayTemp[125] = new spot(306, 320, "binding", "stue");
        arrayTemp[126] = new spot(291, 321, "binding", "stue");
        arrayTemp[128] = new spot(279, 245, "binding", "stue");
        arrayTemp[129] = new spot(280, 179, "binding", "stue");
        arrayTemp[130] = new spot(305, 178, "binding", "stue");
        arrayTemp[131] = new spot(305, 72, "binding", "stue");
        arrayTemp[132] = new spot(282, 70, "binding", "stue");
        arrayTemp[134] = new spot(257, 70, "binding", "stue");
        arrayTemp[135] = new spot(230, 70, "binding", "stue");
        arrayTemp[136] = new spot(214, 70, "binding", "stue");
        arrayTemp[137] = new spot(198, 70, "binding", "stue");
        arrayTemp[138] = new spot(358, 173, "binding", "stue");
        arrayTemp[139] = new spot(363, 75, "binding", "stue");
        arrayTemp[140] = new spot(397, 75, "binding", "stue");
        arrayTemp[142] = new spot(419, 75, "binding", "stue");
        arrayTemp[143] = new spot(421, 107, "binding", "stue");
        arrayTemp[144] = new spot(464, 110, "binding", "stue");
        arrayTemp[145] = new spot(501, 108, "binding", "stue");
        arrayTemp[146] = new spot(560, 112, "binding", "stue");
        arrayTemp[147] = new spot(612, 111, "binding", "stue");
        arrayTemp[148] = new spot(610, 139, "binding", "stue");
        arrayTemp[149] = new spot(598, 140, "binding", "stue");
        arrayTemp[150] = new spot(596, 160, "binding", "stue");
        arrayTemp[151] = new spot(597, 171, "binding", "stue");
        arrayTemp[153] = new spot(574, 171, "binding", "stue");
        arrayTemp[154] = new spot(573, 189, "binding", "stue");
        arrayTemp[155] = new spot(526, 187, "binding", "stue");
        arrayTemp[156] = new spot(671, 415, "binding", "stue");
        arrayTemp[157] = new spot(592, 465, "binding", "stue");
        arrayTemp[158] = new spot(671, 463, "binding", "stue");
        arrayTemp[159] = new spot(693, 463, "binding", "stue");
        arrayTemp[161] = new spot(714, 462, "binding", "stue");
        arrayTemp[162] = new spot(721, 459, "binding", "stue");
        arrayTemp[163] = new spot(791, 459, "binding", "stue");
        arrayTemp[164] = new spot(834, 458, "binding", "stue");
        arrayTemp[165] = new spot(866, 458, "binding", "stue");
        arrayTemp[166] = new spot(916, 458, "binding", "stue");
        arrayTemp[167] = new spot(943, 461, "binding", "stue");
        arrayTemp[168] = new spot(945, 435, "binding", "stue");
        arrayTemp[170] = new spot(1004, 463, "binding", "stue");
        arrayTemp[171] = new spot(871, 431, "binding", "stue");
        arrayTemp[172] = new spot(794, 433, "binding", "stue");
        arrayTemp[173] = new spot(713, 431, "binding", "stue");
        arrayTemp[174] = new spot(691, 429, "binding", "stue");
        arrayTemp[175] = new spot(670, 429, "binding", "stue");
        arrayTemp[176] = new spot(842, 374, "binding", "stue");
        arrayTemp[177] = new spot(831, 357, "binding", "stue");
        arrayTemp[178] = new spot(814, 333, "binding", "stue");
        arrayTemp[219] = new spot(274, 72, "binding", "1. sal");
        arrayTemp[220] = new spot(239, 70, "binding", "1. sal");
        arrayTemp[221] = new spot(193, 70, "binding", "1. sal");
        arrayTemp[222] = new spot(150, 80, "binding", "1. sal");
        arrayTemp[223] = new spot(82, 123, "binding", "1. sal");
        arrayTemp[224] = new spot(299, 261, "binding", "1. sal");
        arrayTemp[225] = new spot(298, 290, "binding", "1. sal");
        arrayTemp[226] = new spot(307, 320, "binding", "1. sal");
        arrayTemp[227] = new spot(331, 318, "binding", "1. sal");
        arrayTemp[228] = new spot(363, 317, "binding", "1. sal");
        arrayTemp[229] = new spot(391, 350, "binding", "1. sal");
        arrayTemp[230] = new spot(399, 409, "binding", "stue");
        arrayTemp[231] = new spot(38, 155, "binding", "stue");
        arrayTemp[232] = new spot(92, 225, "binding", "stue");
        arrayTemp[233] = new spot(179, 180, "binding", "stue");
        arrayTemp[234] = new spot(523, 258, "binding", "1. sal");
        arrayTemp[235] = new spot(499, 258, "binding", "1. sal");
        arrayTemp[236] = new spot(496, 284, "binding", "1. sal");
        arrayTemp[237] = new spot(493, 314, "binding", "1. sal");
        arrayTemp[238] = new spot(608, 256, "binding", "1. sal");
        arrayTemp[239] = new spot(637, 258, "binding", "1. sal");
        arrayTemp[240] = new spot(640, 290, "binding", "1. sal");
        arrayTemp[241] = new spot(636, 330, "binding", "1. sal");
        arrayTemp[242] = new spot(618, 332, "binding", "1. sal");
        arrayTemp[243] = new spot(687, 250, "binding", "1. sal");
        arrayTemp[244] = new spot(693, 293, "binding", "1. sal");
        arrayTemp[245] = new spot(697, 321, "binding", "1. sal");
        arrayTemp[246] = new spot(755, 320, "binding", "1. sal");
        arrayTemp[247] = new spot(769, 318, "binding", "1. sal");
        arrayTemp[248] = new spot(690, 383, "binding", "1. sal");
        arrayTemp[249] = new spot(690, 462, "binding", "1. sal");
        arrayTemp[250] = new spot(666, 463, "binding", "1. sal");
        arrayTemp[251] = new spot(582, 463, "binding", "1. sal");
        arrayTemp[252] = new spot(783, 461, "binding", "1. sal");
        arrayTemp[253] = new spot(835, 461, "binding", "1. sal");
        arrayTemp[254] = new spot(887, 459, "binding", "1. sal");
        arrayTemp[255] = new spot(943, 458, "binding", "1. sal");
        arrayTemp[256] = new spot(941, 438, "binding", "1. sal");
        arrayTemp[257] = new spot(1007, 459, "binding", "1. sal");
        arrayTemp[258] = new spot(687, 216, "binding", "1. sal");
        arrayTemp[259] = new spot(673, 188, "binding", "1. sal");
        arrayTemp[260] = new spot(655, 203, "binding", "1. sal");
        arrayTemp[261] = new spot(624, 196, "binding", "1. sal");
        arrayTemp[262] = new spot(614, 187, "binding", "1. sal");
        arrayTemp[263] = new spot(613, 171, "binding", "1. sal");
        arrayTemp[264] = new spot(624, 171, "binding", "1. sal");
        arrayTemp[265] = new spot(659, 167, "binding", "1. sal");
        arrayTemp[266] = new spot(638, 140, "binding", "1. sal");
        arrayTemp[267] = new spot(652, 131, "binding", "1. sal");
        arrayTemp[268] = new spot(634, 103, "binding", "1. sal");
        arrayTemp[269] = new spot(605, 96, "binding", "1. sal");
        arrayTemp[270] = new spot(608, 139, "binding", "1. sal");
        arrayTemp[271] = new spot(553, 68, "binding", "1. sal");
        arrayTemp[272] = new spot(524, 70, "binding", "1. sal");
        arrayTemp[273] = new spot(443, 68, "binding", "1. sal");
        arrayTemp[274] = new spot(419, 70, "binding", "1. sal");
        arrayTemp[275] = new spot(397, 71, "binding", "1. sal");


        


        /* kopier dette til console i chrome, for at tilføje alle de seneste naboer
        for(let i = 127; i < arrayTemp.length; i++){
            console.log(`arrayTemp[${i}].addNeighbors([]);`);
        }
        */

        arrayTemp[0].addNeighbors([118]);
        arrayTemp[1].addNeighbors([156, 174]);
        arrayTemp[2].addNeighbors([]);
        arrayTemp[3].addNeighbors([]);
        arrayTemp[4].addNeighbors([163, 172]);
        arrayTemp[5].addNeighbors([163, 172]);
        arrayTemp[6].addNeighbors([163, 172]);
        arrayTemp[7].addNeighbors([15, 145]);
        arrayTemp[8].addNeighbors([108]);
        arrayTemp[9].addNeighbors([26, 119]);
        arrayTemp[10].addNeighbors([123, 127]);
        arrayTemp[11].addNeighbors([176]);
        arrayTemp[12].addNeighbors([177]);
        arrayTemp[13].addNeighbors([178]);
        arrayTemp[14].addNeighbors([144]);
        arrayTemp[15].addNeighbors([7, 145]);
        arrayTemp[16].addNeighbors([146]);
        arrayTemp[17].addNeighbors([151, 152]);
        arrayTemp[18].addNeighbors([170]);
        arrayTemp[19].addNeighbors([166]);
        arrayTemp[20].addNeighbors([165]);
        arrayTemp[21].addNeighbors([164]);
        arrayTemp[22].addNeighbors([163]);
        arrayTemp[23].addNeighbors([162]);
        arrayTemp[24].addNeighbors([158]);
        arrayTemp[25].addNeighbors([157]);
        arrayTemp[26].addNeighbors([9, 119]);
        arrayTemp[27].addNeighbors([246]);
        arrayTemp[28].addNeighbors([247]);
        arrayTemp[29].addNeighbors([247]);
        arrayTemp[30].addNeighbors([244]);
        arrayTemp[31].addNeighbors([258]);
        arrayTemp[32].addNeighbors([258]);
        arrayTemp[33].addNeighbors([259]);
        arrayTemp[34].addNeighbors([261]);
        arrayTemp[35].addNeighbors([261]);
        arrayTemp[36].addNeighbors([262]);
        arrayTemp[37].addNeighbors([240]);
        arrayTemp[38].addNeighbors([241]);
        arrayTemp[39].addNeighbors([234, 238]);
        arrayTemp[40].addNeighbors([242]);
        arrayTemp[41].addNeighbors([238]);
        arrayTemp[42].addNeighbors([272]);
        arrayTemp[43].addNeighbors([273]);
        arrayTemp[44].addNeighbors([274]);
        arrayTemp[45].addNeighbors([272]);
        arrayTemp[46].addNeighbors([269]);
        arrayTemp[47].addNeighbors([220]);
        arrayTemp[48].addNeighbors([223]);
        arrayTemp[49].addNeighbors([223]);
        arrayTemp[50].addNeighbors([220]);
        arrayTemp[51].addNeighbors([257]);
        arrayTemp[52].addNeighbors([254]);
        arrayTemp[53].addNeighbors([253]);
        arrayTemp[54].addNeighbors([252]);
        arrayTemp[55].addNeighbors([250]);
        arrayTemp[56].addNeighbors([251]);
        arrayTemp[57].addNeighbors([225]);
        arrayTemp[58].addNeighbors([226]);
        arrayTemp[59].addNeighbors([227]);
        arrayTemp[60].addNeighbors([228]);
        arrayTemp[61].addNeighbors([236]);
        arrayTemp[62].addNeighbors([237]);
        arrayTemp[63].addNeighbors([237]);
        arrayTemp[64].addNeighbors([]);
        arrayTemp[65].addNeighbors([]);
        arrayTemp[66].addNeighbors([]);
        arrayTemp[67].addNeighbors([]);
        arrayTemp[68].addNeighbors([]);
        arrayTemp[69].addNeighbors([]);
        arrayTemp[70].addNeighbors([]);
        arrayTemp[71].addNeighbors([]);
        arrayTemp[72].addNeighbors([]);
        arrayTemp[73].addNeighbors([]);
        arrayTemp[74].addNeighbors([]);
        arrayTemp[75].addNeighbors([]);
        arrayTemp[76].addNeighbors([]);
        arrayTemp[77].addNeighbors([]);
        arrayTemp[78].addNeighbors([]);
        arrayTemp[79].addNeighbors([]);
        arrayTemp[80].addNeighbors([]);
        arrayTemp[81].addNeighbors([]);
        arrayTemp[82].addNeighbors([]);
        arrayTemp[83].addNeighbors([]);
        arrayTemp[84].addNeighbors([]);
        arrayTemp[85].addNeighbors([]);
        arrayTemp[86].addNeighbors([]);
        arrayTemp[87].addNeighbors([]);
        arrayTemp[88].addNeighbors([]);
        arrayTemp[89].addNeighbors([]);
        arrayTemp[90].addNeighbors([]);
        arrayTemp[91].addNeighbors([]);
        arrayTemp[92].addNeighbors([]);
        arrayTemp[93].addNeighbors([]);
        arrayTemp[94].addNeighbors([]);
        arrayTemp[95].addNeighbors([]);
        arrayTemp[96].addNeighbors([]);
        arrayTemp[97].addNeighbors([]);
        arrayTemp[98].addNeighbors([]);
        arrayTemp[99].addNeighbors([]);
        arrayTemp[100].addNeighbors([]);
        arrayTemp[101].addNeighbors([]);
        arrayTemp[102].addNeighbors([]);
        arrayTemp[103].addNeighbors([]);
        arrayTemp[104].addNeighbors([]);
        arrayTemp[105].addNeighbors([]);
        arrayTemp[106].addNeighbors([]);
        arrayTemp[107].addNeighbors([108, 156, 157, 230]);
        arrayTemp[108].addNeighbors([8, 107, 109]);
        arrayTemp[109].addNeighbors([108, 110, 114]);
        arrayTemp[110].addNeighbors([109, 111, 112]);
        arrayTemp[111].addNeighbors([110, 112]);
        arrayTemp[112].addNeighbors([110, 111, 113]);
        arrayTemp[113].addNeighbors([112, 114]);
        arrayTemp[114].addNeighbors([109, 115, 116]);
        arrayTemp[115].addNeighbors([114, 116]);
        arrayTemp[116].addNeighbors([114, 115, 117]);
        arrayTemp[117].addNeighbors([116, 118, 199]);
        arrayTemp[118].addNeighbors([0, 117, 119, 155]);
        arrayTemp[119].addNeighbors([9, 26, 118, 120]);
        arrayTemp[120].addNeighbors([119, 121]);
        arrayTemp[121].addNeighbors([120, 122]);
        arrayTemp[122].addNeighbors([121, 123]);
        arrayTemp[123].addNeighbors([10, 122, 124]);
        arrayTemp[124].addNeighbors([123, 125]);
        arrayTemp[125].addNeighbors([124, 126]);
        arrayTemp[126].addNeighbors([125]);
        arrayTemp[127].addNeighbors([10, 128, 179]);
        arrayTemp[128].addNeighbors([127, 129]);
        arrayTemp[129].addNeighbors([128, 130, 233]);
        arrayTemp[130].addNeighbors([129, 131, 138]);
        arrayTemp[131].addNeighbors([130, 132, 139]);
        arrayTemp[132].addNeighbors([131, 133, 134]);
        arrayTemp[133].addNeighbors([132, 182]);
        arrayTemp[134].addNeighbors([132, 135]);
        arrayTemp[135].addNeighbors([134, 136]);
        arrayTemp[136].addNeighbors([135, 137]);
        arrayTemp[137].addNeighbors([136]);
        arrayTemp[138].addNeighbors([130, 139, 155]);
        arrayTemp[139].addNeighbors([131, 138, 140]);
        arrayTemp[140].addNeighbors([139, 141, 142]);
        arrayTemp[141].addNeighbors([140, 184]);
        arrayTemp[142].addNeighbors([140, 143]);
        arrayTemp[143].addNeighbors([142, 144]);
        arrayTemp[144].addNeighbors([14, 143, 145]);
        arrayTemp[145].addNeighbors([7, 15, 144, 146]);
        arrayTemp[146].addNeighbors([16, 145, 147]);
        arrayTemp[147].addNeighbors([146, 148]);
        arrayTemp[148].addNeighbors([147, 149]);
        arrayTemp[149].addNeighbors([148, 150]);
        arrayTemp[150].addNeighbors([149, 151, 153]);
        arrayTemp[151].addNeighbors([17, 150, 153]);
        arrayTemp[152].addNeighbors([17, 186]);
        arrayTemp[153].addNeighbors([150, 151, 154]);
        arrayTemp[154].addNeighbors([116, 153, 155]);
        arrayTemp[155].addNeighbors([118, 138, 154]);
        arrayTemp[156].addNeighbors([1, 107, 175]);
        arrayTemp[157].addNeighbors([25, 107, 158]);
        arrayTemp[158].addNeighbors([24, 157, 159, 175]);
        arrayTemp[159].addNeighbors([158, 160, 161, 174]);
        arrayTemp[160].addNeighbors([159, 189]);
        arrayTemp[161].addNeighbors([159, 162, 173]);
        arrayTemp[162].addNeighbors([23, 161, 163]);
        arrayTemp[163].addNeighbors([4, 5, 6, 22, 162, 164]);
        arrayTemp[164].addNeighbors([21, 163, 165]);
        arrayTemp[165].addNeighbors([20, 164, 166, 171]);
        arrayTemp[166].addNeighbors([19, 165, 167]);
        arrayTemp[167].addNeighbors([166, 168, 170]);
        arrayTemp[168].addNeighbors([167, 169, 171]);
        arrayTemp[169].addNeighbors([168, 192]);
        arrayTemp[170].addNeighbors([18, 167]);
        arrayTemp[171].addNeighbors([165, 168, 172, 176]);
        arrayTemp[172].addNeighbors([4, 5, 6, 171, 173]);
        arrayTemp[173].addNeighbors([161, 172, 174]);
        arrayTemp[174].addNeighbors([1, 173, 175]);
        arrayTemp[175].addNeighbors([156, 158, 174]);
        arrayTemp[176].addNeighbors([11, 171, 177]);
        arrayTemp[177].addNeighbors([12, 176, 178]);
        arrayTemp[178].addNeighbors([13, 177]);
        arrayTemp[179].addNeighbors([127, 180, 224]);
        arrayTemp[180].addNeighbors([179, 181]);
        arrayTemp[181].addNeighbors([180]);
        arrayTemp[182].addNeighbors([133, 183, 219]);
        arrayTemp[183].addNeighbors([182]);
        arrayTemp[184].addNeighbors([141, 185, 275]);
        arrayTemp[185].addNeighbors([184]);
        arrayTemp[186].addNeighbors([152, 187, 264]);
        arrayTemp[187].addNeighbors([186, 188]);
        arrayTemp[188].addNeighbors([187]);
        arrayTemp[189].addNeighbors([160, 190, 249]);
        arrayTemp[190].addNeighbors([189, 191]);
        arrayTemp[191].addNeighbors([190]);
        arrayTemp[192].addNeighbors([169, 193, 256]);
        arrayTemp[193].addNeighbors([192, 194]);
        arrayTemp[194].addNeighbors([193]);
        arrayTemp[195].addNeighbors([]);
        arrayTemp[196].addNeighbors([]);
        arrayTemp[197].addNeighbors([]);
        arrayTemp[198].addNeighbors([]);
        arrayTemp[199].addNeighbors([117, 200]);
        arrayTemp[200].addNeighbors([199, 234]);
        arrayTemp[201].addNeighbors([]);
        arrayTemp[202].addNeighbors([]);
        arrayTemp[203].addNeighbors([]);
        arrayTemp[204].addNeighbors([]);
        arrayTemp[205].addNeighbors([206, 231]);
        arrayTemp[206].addNeighbors([205, 207, 223]);
        arrayTemp[207].addNeighbors([206, 208]);
        arrayTemp[208].addNeighbors([207]);
        arrayTemp[209].addNeighbors([]);
        arrayTemp[210].addNeighbors([]);
        arrayTemp[211].addNeighbors([]);
        arrayTemp[212].addNeighbors([]);
        arrayTemp[213].addNeighbors([]);
        arrayTemp[214].addNeighbors([215, 230]);
        arrayTemp[215].addNeighbors([214, 216, 229]);
        arrayTemp[216].addNeighbors([215, 217]);
        arrayTemp[217].addNeighbors([216]);
        arrayTemp[218].addNeighbors([]);
        arrayTemp[219].addNeighbors([182, 220]);
        arrayTemp[220].addNeighbors([47, 50, 219, 221]);
        arrayTemp[221].addNeighbors([220, 222]);
        arrayTemp[222].addNeighbors([221, 223]);
        arrayTemp[223].addNeighbors([48, 49, 206, 222]);
        arrayTemp[224].addNeighbors([179, 225]);
        arrayTemp[225].addNeighbors([57, 224, 226]);
        arrayTemp[226].addNeighbors([58, 225, 227]);
        arrayTemp[227].addNeighbors([59, 226, 228]);
        arrayTemp[228].addNeighbors([60, 227, 229]);
        arrayTemp[229].addNeighbors([215, 228]);
        arrayTemp[230].addNeighbors([107, 214]);
        arrayTemp[231].addNeighbors([205, 232]);
        arrayTemp[232].addNeighbors([231, 233]);
        arrayTemp[233].addNeighbors([129, 232]);
        arrayTemp[234].addNeighbors([39, 200, 235]);
        arrayTemp[235].addNeighbors([234, 236]);
        arrayTemp[236].addNeighbors([61, 235, 237]);
        arrayTemp[237].addNeighbors([62, 63, 236]);
        arrayTemp[238].addNeighbors([39, 41, 239]);
        arrayTemp[239].addNeighbors([238, 240, 243]);
        arrayTemp[240].addNeighbors([37, 239, 241]);
        arrayTemp[241].addNeighbors([38, 240, 242]);
        arrayTemp[242].addNeighbors([40, 241]);
        arrayTemp[243].addNeighbors([239, 244, 258]);
        arrayTemp[244].addNeighbors([30, 243, 245]);
        arrayTemp[245].addNeighbors([244, 246, 248]);
        arrayTemp[246].addNeighbors([27, 245, 247]);
        arrayTemp[247].addNeighbors([28, 29, 246]);
        arrayTemp[248].addNeighbors([245, 249]);
        arrayTemp[249].addNeighbors([189, 248, 250, 252]);
        arrayTemp[250].addNeighbors([55, 259, 251]);
        arrayTemp[251].addNeighbors([56, 250]);
        arrayTemp[252].addNeighbors([54, 249, 253]);
        arrayTemp[253].addNeighbors([53, 252, 254]);
        arrayTemp[254].addNeighbors([52, 253, 255]);
        arrayTemp[255].addNeighbors([254, 256, 257]);
        arrayTemp[256].addNeighbors([192, 255]);
        arrayTemp[257].addNeighbors([51, 255]);
        arrayTemp[258].addNeighbors([31, 32, 243, 259, 260]);
        arrayTemp[259].addNeighbors([33, 258, 260, 265]);
        arrayTemp[260].addNeighbors([258, 259, 261]);
        arrayTemp[261].addNeighbors([34, 35, 260, 262]);
        arrayTemp[262].addNeighbors([36, 261, 263]);
        arrayTemp[263].addNeighbors([262, 264]);
        arrayTemp[264].addNeighbors([186, 263, 265]);
        arrayTemp[265].addNeighbors([259, 264, 266]);
        arrayTemp[266].addNeighbors([265, 267, 270]);
        arrayTemp[267].addNeighbors([266, 268]);
        arrayTemp[268].addNeighbors([267, 269]);
        arrayTemp[269].addNeighbors([46, 268, 270, 271]);
        arrayTemp[270].addNeighbors([266, 269]);
        arrayTemp[271].addNeighbors([269, 272]);
        arrayTemp[272].addNeighbors([42, 45, 271, 273]);
        arrayTemp[273].addNeighbors([43, 272, 274]);
        arrayTemp[274].addNeighbors([44, 273, 275]);
        arrayTemp[275].addNeighbors([184, 274]);











    }


    
}