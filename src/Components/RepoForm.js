import React from 'react'

export default function RepoForm(props) {

    const { onChange, onSubmit, values } = props

    return( <div>
                <h3>Create a repository:</h3>
                <form onSubmit={onSubmit}> 
                    <label>Name:
                        <input 
                            type="text" 
                            onChange={onChange}
                            value={values.name}
                            name='name'
                            placeholder='name'
                        />
                    </label>
                    <label>Description:
                        <input 
                            type="text" 
                            onChange={onChange}
                            value={values.description}
                            name='description'
                            placeholder='description'
                        />
                    </label>
                    {/* <label>Private:
                        Yes
                        <input 
                            type="radio" 
                            onChange={onChange}
                            value={ values.private }
                            name='private'
                        />
                        No
                        <input 
                            type="radio" 
                            onChange={onChange}
                            value={ values.private }
                            name='private'
                        />
                    </label> */}
                    <input type="submit" value="create"/>
                </form>
            </div>
    )
}