import React from 'react';
import placeholderImage from '../../plants/placeholder-image.png';
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
        // TODO: do something with -> this.state.file
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
                    <input className="fileInput"
                        type="file"
                        onChange={(e) => this.handleImageChange(e)} />
                    <button className="submitButton"
                        type="submit"
                        onClick={(e) => this.handleSubmit(e)}>Upload Image</button>
                </form>
                <div className="imgPreview">
                    {imagePreview}
                </div>
            </div>
        )
    }
}