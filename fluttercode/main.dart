import 'package:flutter/material.dart';

//void main () => runApp(MyApp());

//Text Widget
// class MyApp extends StatelessWidget{
//   @override
//   Widget build(BuildContext context){
//     return MaterialApp(
//       title: 'Text widget',
//       home : Scaffold(
//         body : Center(
//           child: Text('我望学会一切前端知识我是前端小罗 我希望学会一切前端知识我是前端小识1',
//           textAlign: TextAlign.center,
//           maxLines: 1,
//           overflow: TextOverflow.ellipsis,
//           style: TextStyle(
//             fontSize: 15.0,
//             color: Color.fromARGB(255, 0, 160, 0),
//             decoration: TextDecoration.underline,
//             decorationStyle: TextDecorationStyle.dotted
//           ),
//           ),
//         ),
//       ),
//     );
//   }
// }


//Container Widget 1
// class MyApp extends StatelessWidget{
//   @override
//   Widget build(BuildContext context){
//     return MaterialApp(
//       title: 'Text widget',
//       home : Scaffold(
//         body : Center(
//           child: Container(
//             child: Text(
//               'hello js',
//               style : TextStyle(
//                 fontSize:40,
//                 color: Color.fromRGBO(255,255,255,.5)
//               )
//             ),
//             alignment: Alignment.centerRight,
//             width:200,
//             height:200,
//             color:Colors.blue
//           ),
//         )
//       )
//     );
//   }
// }

//Container Widget 2
// class MyApp extends StatelessWidget{
//   @override
//   Widget build(BuildContext context){
//     return MaterialApp(
//       title: 'Text widget',
//       home : Scaffold(
//         body : Center(
//           child: Container(
//             child: Text(
//               'hello js',
//               style : TextStyle(
//                 fontSize:40,
//                 color: Color.fromRGBO(255,255,255,.6)
//               )
//             ),
//             alignment: Alignment.topLeft,
//             width:200,
//             height:200,
//             //color:Colors.blue,
//             padding:const EdgeInsets.fromLTRB(20, 50, 0, 0),
//             margin:const EdgeInsets.fromLTRB(20, 50, 0, 0),
//             decoration : BoxDecoration(
//               gradient: const LinearGradient(
//                 colors: [
//                   Colors.lightBlue,
//                   Colors.red,
//                   Colors.yellow
//                 ]
//               ),
//               border: Border.all(
//                 width : 2,
//                 color: Colors.black
//               )
//             )
//           ),
//         )
//       )
//     );
//   }
// }



//image 
// class MyApp extends StatelessWidget{
//   @override
//   Widget build(BuildContext context){
//     return MaterialApp(
//       title: 'Text widget',
//       home : Scaffold(
//         body : Center(
//           child: Container(
//             child : Image.network(
//               'https://img3.img.9xiu.com/upload/roomimg_web/2019/06/04/27289423123058x1p7d8n91v_317x317.png',
//               fit : BoxFit.contain,
//               color: Colors.greenAccent,
//               colorBlendMode: BlendMode.darken,
//               repeat: ImageRepeat.repeatX,
//             ),
//             width:300,
//             height:200,
//             color: Colors.red,
//             padding: EdgeInsets.fromLTRB(10,10,10,10),
//           ),
//         )
//       )
//     );
//   }
// }


//list view 1
// class MyApp extends StatelessWidget{
//   @override
//   Widget build(BuildContext context){
//     return MaterialApp(
//       title: 'Text widget',
//       home : Scaffold(
//         appBar : AppBar(
//           title: Text('this listview'),
//         ),
//         body : ListView(
//           children: <Widget>[
//             // ListTile(
//             //   leading: Icon(Icons.arrow_forward_ios),
//             //   title: Text('列表1'),
//             // ),
//             Image.network('https://img7.img.9xiu.com/upload/roomimg_web/2019/05/31/2498694714023694icd9m00o_317x317.png?v=1559282685208'),
//             Image.network('https://img7.img.9xiu.com/upload/roomimg_web/2019/05/31/2498694714023694icd9m00o_317x317.png?v=1559282685208'),
//             Image.network('https://img7.img.9xiu.com/upload/roomimg_web/2019/05/31/2498694714023694icd9m00o_317x317.png?v=1559282685208'),
//             Image.network('https://img7.img.9xiu.com/upload/roomimg_web/2019/05/31/2498694714023694icd9m00o_317x317.png?v=1559282685208'),
//             Image.network('https://img7.img.9xiu.com/upload/roomimg_web/2019/05/31/2498694714023694icd9m00o_317x317.png?v=1559282685208'),
//           ],
//         )
//       )
//     );
//   }
// }


//list view 2
// class MyApp extends StatelessWidget{
//   @override
//   Widget build(BuildContext context){
//     return MaterialApp(
//       title: 'Text widget',
//       home : Scaffold(
//         appBar : AppBar(
//           title: Text('this listview'),
//         ),
//         body : Center(
//           child: Container(
//             height: 200,
//             child: MyList(),
//           ),
//         )
//       )
//     );
//   }
// }

// class MyList extends StatelessWidget{
//   @override
//   Widget build(BuildContext context){
//     return ListView(
//               scrollDirection: Axis.horizontal,//横向
//               children: <Widget>[
//                 Container(
//                   width: 180,
//                   height:180,
//                   color:Colors.lightBlue,
//                 ),
//                 Container(
//                   width: 180,
//                   height:180,
//                   color:Colors.red,
//                 ),
//                 Container(
//                   width: 180,
//                   height:180,
//                   color:Colors.yellow,
//                 ),
//                 Container(
//                   width: 180,
//                   height:180,
//                   color:Colors.green,
//                 )
//               ],
//           );
//   }
// }




// 动态列表

void main () => runApp(MyApp(
  //传递参数
  items : List<String>.generate(100, (i)=>'item $i')
));

class MyApp extends StatelessWidget{

  //接收参数
  final List<String> items;
  MyApp({Key key,@required this.items}):super(key:key);

  @override
  Widget build(BuildContext context){
    return MaterialApp(
      title: 'Text widget',
      home : Scaffold(
        appBar : AppBar(
          title: Text('this listview'),
        ),
        body : new ListView.builder(
          itemCount: items.length,
          itemBuilder: (context,index){
            return new ListTile(
              title: new Text('${items[index]}')
            );
          },
        )
      )
    );
  }
}

