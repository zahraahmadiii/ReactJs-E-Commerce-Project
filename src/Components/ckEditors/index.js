

// import React, { Component } from 'react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import styles from "./style.module.css"
// class CkEditors extends Component {
//     render() {
//         return (
//             <div className="App">
             
//                 <CKEditor 
//                     editor={ ClassicEditor }
//                     data="<p className={styles.para}></p>"
//                     onReady={ editor => {
                      
//                         console.log( 'Editor is ready to use!', editor );
//                     } }
//                     onChange={ ( event, editor ) => {
//                         const data = editor.getData();
//                         console.log( { event, editor, data } );
//                     } }
//                     onBlur={ ( event, editor ) => {
//                         console.log( 'Blur.', editor );
//                     } }
//                     onFocus={ ( event, editor ) => {
//                         console.log( 'Focus.', editor );
//                     } }
//                 />
//             </div>
//         );
//     }
// }

// export default CkEditors;
