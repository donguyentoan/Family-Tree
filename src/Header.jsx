import React from 'react'

const Header = () => {
  return (
    <div class="container">
                <div class="row flex">
                    <div class="col-3 text-center">
                        <img className='w-11' src="https://truong36.giaphadaiviet.vn/images/banner-header-left-default.png" alt="Banner Header Left"/>
                    </div>
                    <div class="col-6 text-center">
                        <div class="header-banner">
                            <div class="header-banner-inner">
                                    <div class="header-banner-image">
                                        <img className='w-12' src="https://truong36.giaphadaiviet.vn/images/banner-header-center-default.png" alt="Banner Header Center"/>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 text-center">
                        <img className='w-11' src="https://truong36.giaphadaiviet.vn/images/banner-header-right-default.png" alt="Banner Header Right"/>
                    </div>
                </div>
            </div>
  )
}

export default Header