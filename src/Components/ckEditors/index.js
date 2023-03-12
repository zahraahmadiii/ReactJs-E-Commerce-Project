import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styles from "./style.module.css"
class CkEditors extends Component {
    render() {
        return (
            <div className={styles.ck}>
             
                <CKEditor 
                    editor={ ClassicEditor }
                    data="<p className={styles.para}></p>"
                />
            </div>
        );
    }
}

export default CkEditors;
