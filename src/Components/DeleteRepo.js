import React from 'react'

export default function DeleteRepo(props) {

    const { onChange, onSubmit, values } = props

    return( <div>
                <h3>Delete a repository (!!DANGER!!)</h3>
                <form onSubmit={onSubmit}> 
                    <input 
                        type="text" 
                        onChange={onChange}
                        value={values.name}
                        name='name'
                        placeholder='name'
                    />
                    <input type="submit" value="delete"/>
                </form>
            </div>
    )
}