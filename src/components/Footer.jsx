import React, { PureComponent } from 'react'

class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            

            <div class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow-sm">
                <div class="flex justify-between items-center">
                <span class="text-sm text-blue-500 ">
                    © 2025 <a href="/">SiteName</a>. All Rights Reserved.
                </span>
                <ul class="flex flex-wrap space-x-4 text-sm font-medium text-blue-500 ">
                    <li>
                        <a href="/about" class="me-4">About</a>
                    </li>
                    <li>
                        <a class="me-4">Privacy Policy</a>
                    </li>
                    <li>
                        <a class="me-4">Licensing</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
                </div>
            </div>


        )
    }
}

export default Footer