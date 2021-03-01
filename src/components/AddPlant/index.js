import React from 'react'

export default function AddPlant() {
    return (
        <div>
            <h3>Add Plant</h3>
            <form>
                <label>
                    Имя:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Отправить" />
            </form>
        </div>
    )
}
