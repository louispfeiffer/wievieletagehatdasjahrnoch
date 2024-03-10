import * as React from "react"
import Navbar from "./navbar"
import Footer from "./footer"

import blog_cover_1 from "../images/clockonwrist.webp"
import blog_cover_2 from "../images/calender.webp"
import blog_cover_3 from "../images/black-men-busniess.webp"

const BlogPage = () => {
    return (
        <body>
            <section className="bg-gradient-to-b from-blue">
                <Navbar></Navbar>

                <section className="mt-8">

                    <div className="flex justify-center">
                        <div className="grid sm:grid-cols-1 md:grid-cols-3">

                            <div class="sm:w-auto md:w-96 m-4 bg-white rounded-lg hover:shadow-xl">
                                <a href="/wie-viele-tage-hat-das-jahr-noch">
                                    <img class="rounded-t-lg" src={blog_cover_1} alt="blog_cover_1" />
                                </a>
                                <div class="p-5">
                                    <a href="/wie-viele-tage-hat-das-jahr-noch">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight">Wie viele Tage hat das jahr noch?</h5>
                                    </a>
                                    <p class="mb-3 font-normal">Eine Reise durch das Kalenderjahr, von den ersten Tagen im Januar bis zum festlichen Finale im Dezember.</p>
                                    <a href="/wie-viele-tage-hat-das-jahr-noch" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green rounded-lg focus:ring-4 focus:outline-none">
                                        weiter lesen
                                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div class="sm:w-auto md:w-96 m-4 bg-white rounded-lg hover:shadow-xl">
                                <a href="/Wie-man-die-verbleibenden-Tage-des-Jahres-ideal-nutzen-kann">
                                    <img class="rounded-t-lg" src={blog_cover_2} alt="blog_cover_2" />
                                </a>
                                <div class="p-5">
                                    <a href="/Wie-man-die-verbleibenden-Tage-des-Jahres-ideal-nutzen-kann">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight">Wie man die verbleibenden Tage des Jahres ideal nutzen kann</h5>
                                    </a>
                                    <p class="mb-3 font-normal">Entdecken Sie und lassen Sie sich inspirieren, wie Sie die verbleibenden Tage des Jahres nutzen können.</p>
                                    <a href="/Wie-man-die-verbleibenden-Tage-des-Jahres-ideal-nutzen-kann" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green rounded-lg focus:ring-4 focus:outline-none">
                                        weiter lesen
                                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div class="sm:w-auto md:w-96 m-4 bg-white rounded-lg hover:shadow-xl">
                                <a href="/die-psychologische-Kraft-des-Countdowns-und-ihr-Einfluss-auf-unser-Verhalten">
                                    <img class="rounded-t-lg" src={blog_cover_3} alt="blog_cover_3" />
                                </a>
                                <div class="p-5">
                                    <a href="/die-psychologische-Kraft-des-Countdowns-und-ihr-Einfluss-auf-unser-Verhalten">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Die psychologische Kraft des Countdowns und ihr Einfluss auf unser Verhalten</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Tauchen Sie ein in die faszinierende Welt der Countdowns und erfahren Sie, wie die verbleibende Zeit unsere Motivation steigert.</p>
                                    <a href="/die-psychologische-Kraft-des-Countdowns-und-ihr-Einfluss-auf-unser-Verhalten" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>
                            </div>



                            <div class="sm:w-auto md:w-96 m-4 bg-white rounded-lg hover:shadow-xl">
                                <a href="#">
                                    <img class="rounded-t-lg" src={blog_cover_1} alt="Füllbild" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div class="sm:w-auto md:w-96 m-4 bg-white rounded-lg hover:shadow-xl">
                                <a href="#">
                                    <img class="rounded-t-lg" src={blog_cover_1} alt="Füllbild" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div class="sm:w-auto md:w-96 m-4 bg-white rounded-lg hover:shadow-xl">
                                <a href="#">
                                    <img class="rounded-t-lg" src={blog_cover_1} alt="Füllbild" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </section>

            <Footer></Footer>
        </body>
    )
}

export default BlogPage

export const Head = () => <title>Blog</title>