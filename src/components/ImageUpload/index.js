import React from 'react';
import placeholderImage from '../../plants/placeholder-image.png';
import Button from '@material-ui/core/Button';
import MyButton from '../MyButton/index';
import './imageUpload.css';

export default class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: ''
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        
        console.log('handle uploading-', this.state.file.name);
    }

    handleImageChange = (event) => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
    }

    render() {
        let { imagePreviewUrl } = this.state;
        let imagePreview = null;
        if (imagePreviewUrl) {
            imagePreview = (<img src={imagePreviewUrl} />);
        }

        return (
            <div className="previewComponent">
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <Button variant="contained"
                        component="label">Choose the image
                        <input className="fileInput"
                            type="file"
                            hidden
                            onChange={(e) => this.handleImageChange(e)} /></Button>

                    {this.state.file ? <MyButton
                        type="submit"
                        value='Upload Image'
                        onClick={(e) => {
                            this.handleSubmit(e);
                            this.props.onImgClick(this.state.imagePreviewUrl);
                            this.props.onUploadImage(this.state.file);
                        }
                        }/> : ""}
                </form>
                <div className="imgPreview">
                    {imagePreview}
                </div>
            </div>
        )
    }
}