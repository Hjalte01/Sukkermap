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

        //osv

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



        


        

        arrayTemp[0].addNeighbors([118]);
        arrayTemp[1].addNeighbors([107]);
        arrayTemp[2].addNeighbors([]);
        arrayTemp[3].addNeighbors([]);
        arrayTemp[4].addNeighbors([]);
        arrayTemp[5].addNeighbors([]);
        arrayTemp[6].addNeighbors([]);
        arrayTemp[7].addNeighbors([]);
        arrayTemp[8].addNeighbors([108]);
        arrayTemp[9].addNeighbors([26, 119]);
        arrayTemp[10].addNeighbors([123]);
        arrayTemp[11].addNeighbors([]);
        arrayTemp[12].addNeighbors([]);
        arrayTemp[13].addNeighbors([]);
        arrayTemp[14].addNeighbors([]);
        arrayTemp[15].addNeighbors([]);
        arrayTemp[16].addNeighbors([]);
        arrayTemp[17].addNeighbors([]);
        arrayTemp[18].addNeighbors([]);
        arrayTemp[19].addNeighbors([]);
        arrayTemp[20].addNeighbors([]);
        arrayTemp[21].addNeighbors([]);
        arrayTemp[22].addNeighbors([]);
        arrayTemp[23].addNeighbors([]);
        arrayTemp[24].addNeighbors([]);
        arrayTemp[25].addNeighbors([]);
        arrayTemp[26].addNeighbors([9, 119]);
        arrayTemp[27].addNeighbors([]);
        arrayTemp[28].addNeighbors([]);
        arrayTemp[29].addNeighbors([]);
        arrayTemp[30].addNeighbors([]);
        arrayTemp[31].addNeighbors([]);
        arrayTemp[32].addNeighbors([]);
        arrayTemp[33].addNeighbors([]);
        arrayTemp[34].addNeighbors([]);
        arrayTemp[35].addNeighbors([]);
        arrayTemp[36].addNeighbors([]);
        arrayTemp[37].addNeighbors([]);
        arrayTemp[38].addNeighbors([]);
        arrayTemp[39].addNeighbors([]);
        arrayTemp[40].addNeighbors([]);
        arrayTemp[41].addNeighbors([]);
        arrayTemp[42].addNeighbors([]);
        arrayTemp[43].addNeighbors([]);
        arrayTemp[44].addNeighbors([]);
        arrayTemp[45].addNeighbors([]);
        arrayTemp[46].addNeighbors([]);
        arrayTemp[47].addNeighbors([]);
        arrayTemp[48].addNeighbors([]);
        arrayTemp[49].addNeighbors([]);
        arrayTemp[50].addNeighbors([]);
        arrayTemp[51].addNeighbors([]);
        arrayTemp[52].addNeighbors([]);
        arrayTemp[53].addNeighbors([]);
        arrayTemp[54].addNeighbors([]);
        arrayTemp[55].addNeighbors([]);
        arrayTemp[56].addNeighbors([]);
        arrayTemp[57].addNeighbors([]);
        arrayTemp[58].addNeighbors([]);
        arrayTemp[59].addNeighbors([]);
        arrayTemp[60].addNeighbors([]);
        arrayTemp[61].addNeighbors([]);
        arrayTemp[62].addNeighbors([]);
        arrayTemp[63].addNeighbors([]);
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
        arrayTemp[107].addNeighbors([1, 108]);
        arrayTemp[108].addNeighbors([8, 107, 109]);
        arrayTemp[109].addNeighbors([108, 110, 114]);
        arrayTemp[110].addNeighbors([109, 111, 112]);
        arrayTemp[111].addNeighbors([110, 112]);
        arrayTemp[112].addNeighbors([110, 111, 113]);
        arrayTemp[113].addNeighbors([112, 114]);
        arrayTemp[114].addNeighbors([109, 115, 116]);
        arrayTemp[115].addNeighbors([114, 116]);
        arrayTemp[116].addNeighbors([114, 115, 117]);
        arrayTemp[117].addNeighbors([116, 118]);
        arrayTemp[118].addNeighbors([0, 117, 119]);
        arrayTemp[119].addNeighbors([9, 26, 118, 120]);
        arrayTemp[120].addNeighbors([119, 121]);
        arrayTemp[121].addNeighbors([120, 122]);
        arrayTemp[122].addNeighbors([121, 123]);
        arrayTemp[123].addNeighbors([10, 122, 124]);
        arrayTemp[124].addNeighbors([123, 125]);
        arrayTemp[125].addNeighbors([124, 126]);
        arrayTemp[126].addNeighbors([125]);




    }


    
}