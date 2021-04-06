class Arrays{
    constructor(){

    }


    indreArray(){
        // indreBygninger[-1] = 0, indreTing.stue;    //kælder
        // indreBygninger[-1][0] = [];             //rum til kælderen

        indreBygninger[0] = [indreTing.stue,    //stue
        //  nr:    nr2:    x:    y:  evt. x1 og y1 hvis vi tager højde for hvert dør i lokalet. nr2 kan bruges i søgnings algoritmen hvis folk søger på lokale 001 i stedet for 1
           ['1',   '001',  100,  100],
           ['2',   '002',  100,  100],
           ['3',   '003',  100,  100],
           ['36',  '036',  100,  100], 
           ['37',  '037',  100,  100],
           ['38',  '038',  100,  100],
           ['39',  '039',  100,  100], 
           ['71',  '071',  100,  100], 
           ['73',  '073',  100,  100],
           ['74',  '074',  100,  100],
           ['74a', '074a', 100,  100], 
           ['75',  '075',  100,  100],
           ['76',  '076',  100,  100],
           ['77',  '077',  100,  100], 
           ['78',  '078',  100,  100],
           ['81',  '081',  100,  100]
        ];     
    
        indreBygninger[1] = [indreTing.sal1,    //1 sal
        //  nr:     nr2:         x:    y:            
           ['103',  undefined,   100,  100],
           ['105',  undefined,   100,  100],
           ['106',  undefined,   100,  100],
           ['107A', undefined,   100,  100], 
           ['110',  undefined,   100,  100],
           ['112',  undefined,   100,  100],
           ['113',  undefined,   100,  100], 
           ['115',  undefined,   100,  100], 
           ['116',  undefined,   100,  100],
           ['118',  undefined,   100,  100],
           ['126',  undefined,   100,  100], 
           ['127',  undefined,   100,  100], 
           ['128',  undefined,   100,  100],
           ['129',  undefined,   100,  100],
           ['130',  undefined,   100,  100],
           ['142',  undefined,   100,  100], 
           ['143',  undefined,   100,  100],
           ['144',  undefined,   100,  100],
           ['145',  undefined,   100,  100], 
           ['147',  undefined,   100,  100],
           ['170',  undefined,   100,  100],
           ['172',  undefined,   100,  100], 
           ['173',  undefined,   100,  100],
           ['174',  undefined,   100,  100],
           ['175',  undefined,   100,  100], 
           ['176',  undefined,   100,  100],
           ['181',  undefined,   100,  100],
           ['182',  undefined,   100,  100], 
           ['183',  undefined,   100,  100],
           ['191',  undefined,   100,  100],
           ['192',  undefined,   100,  100],
           ['193',  undefined,   100,  100]
        ];


        indreBygninger[2] = [indreTing.sal2,    //2 sal
        //  nr:     nr2:         x:    y:            
           ['206',  undefined,   100,  100],
           ['207',  undefined,   100,  100],
           ['208',  undefined,   100,  100],
           ['209',  undefined,   100,  100], 
           ['212',  undefined,   100,  100],
           ['213',  undefined,   100,  100],
           ['216',  undefined,   100,  100], 
           ['218',  undefined,   100,  100], 
           ['219',  undefined,   100,  100],
           ['220',  undefined,   100,  100],
           ['221',  undefined,   100,  100], 
           ['222',  undefined,   100,  100], 
           ['223',  undefined,   100,  100],
           ['224',  undefined,   100,  100],
           ['225',  undefined,   100,  100],
           ['226',  undefined,   100,  100], 
           ['241',  undefined,   100,  100],
           ['242',  undefined,   100,  100],
           ['243',  undefined,   100,  100], 
           ['244',  undefined,   100,  100],
           ['280',  undefined,   100,  100],
           ['281',  undefined,   100,  100],
           ['282',  undefined,   100,  100], 
           ['283',  undefined,   100,  100]
        ];

        indreBygninger[3] = [indreTing.sal3,    //3 sal
        //  nr:     nr2:         x:    y:            
           ['302',  undefined,   100,  100],
           ['316A', undefined,   100,  100],
           ['341',  undefined,   100,  100],
           ['374',  undefined,   100,  100],
           ['375',  undefined,   100,  100], 
           ['376',  undefined,   100,  100],
           ['377',  undefined,   100,  100],
           ['378',  undefined,   100,  100], 
           ['380',  undefined,   100,  100],
           ['381',  undefined,   100,  100],
           ['382',  undefined,   100,  100], 
           ['383',  undefined,   100,  100], 
           ['480',  undefined,   100,  100]
        ];

        
        return indreBygninger;
    }







}