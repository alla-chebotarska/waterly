import Button from '@material-ui/core/Button';
import React from 'react';
import MyButton from '../MyButton/index';
import './filePicker.css';

export default class FilePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: ''
        };
    }

    handleSubmit(event) {
        event.preventDefault();
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
            imagePreview = (<img src={imagePreviewUrl} alt="plant"/>);
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
                            this.props.onFileSelected(this.state.file, this.state.imagePreviewUrl);
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