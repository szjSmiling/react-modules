import React from 'react';
import FileUpload from './react-fileupload.jsx';

class FileUploader extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const options={
      baseUrl:'/manage/product/upload.do',
      fileFieldName: 'upload_file',
      dataType: 'json',
      chooseAndUpload: true,
      uploadSuccess: (res) => {
        this.props.onSuccess(res.data);
      },
      uploadError: (error) => {
        this.props.onError(error.message || '上传图片失败');
      }
    }
    return (
      <FileUpload options={options}>
        <button className="btn btn-xs btn-default" ref="chooseAndUpload">请选择图片</button>
      </FileUpload>
    )	
  }
}

export default FileUploader;
