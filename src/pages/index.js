import * as React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import DaysLeft from "./dayleft"

import blog_cover_1 from "../images/clockonwrist.webp"
import blog_cover_2 from "../images/calender.webp"
import blog_cover_3 from "../images/black-men-busniess.webp"
import blog_cover_4 from "../images/firework.webp"


const IndexPage = () => {
  return (
    <html>
      <body>
        <section className="bg-gradient-to-b from-blue">

          <Navbar></Navbar>

          <section class="bg-white sm:hidden">
            <div class="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-4">
              <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Wie viele Tage hat das Jahr 2024 noch?</h1>
              <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">Was denkst du, wie viele Tage es noch zu deinem Geburtstag sind? Finde es hier heraus.</p>
            </div>
          </section>

          <DaysLeft className=""></DaysLeft>

          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 m-4">
            <a href="/404" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green hover:shadow-xl focus:ring-4">
              Zum Zeitrechner
              <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
            <a href="/blog" class="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg hover:shadow-xl focus:z-10 focus:ring-4">
              Mehr
            </a>
          </div>

          <div className="flex justify-center">
            <div className="grid sm:grid-cols-1 md:grid-cols-2">

              <div class="m-4 md:w-96 bg-white rounded-lg hover:shadow-xl">
                <a href="/wie-viele-tage-hat-das-jahr-noch">
                  <img class="rounded-t-lg" src={blog_cover_1} alt="Füllbild" />
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

              <div class="m-4 md:w-96 bg-white rounded-lg hover:shadow-xl">
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


              <div class="m-4 md:w-96 bg-white rounded-lg hover:shadow-xl">
                <a href="/die-psychologische-Kraft-des-Countdowns-und-ihr-Einfluss-auf-unser-Verhalten">
                  <img class="rounded-t-lg" src={blog_cover_3} alt="blog_cover_3" />
                </a>
                <div class="p-5">
                  <a href="/die-psychologische-Kraft-des-Countdowns-und-ihr-Einfluss-auf-unser-Verhalten">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight">Die psychologische Kraft des Countdowns und ihr Einfluss</h5>
                  </a>
                  <p class="mb-3 font-normal">Die Welt der Countdowns und erfahren Sie, wie die verbleibende Zeit unsere Motivation steigert.</p>
                  <a href="/die-psychologische-Kraft-des-Countdowns-und-ihr-Einfluss-auf-unser-Verhalten" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    weiter lesen
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>

              <div class="m-4 md:w-96 bg-white rounded-lg hover:shadow-xl">
                <a href="/die-kulturelle-Bedeutung-des-Jahresendes">
                  <img class="rounded-t-lg" src={blog_cover_4} alt="blog_cover_4" />
                </a>
                <div class="p-5">
                  <a href="/die-kulturelle-Bedeutung-des-Jahresendes">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Die kulturelle Bedeutung des Jahresendes</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Die kulturelle Bedeutung des Jahresendes. Wie verschiedene Kulturen das Ende des Jahres feiern und reflektieren</p>
                  <a href="/die-kulturelle-Bedeutung-des-Jahresendes" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    weiter lesen
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>


        </section>

        <div className="flex justify-center items-center">
          <div className="text-black h-60 flex justify-center items-center">
            <div className="mx-4 md:w-1/2 mt-5">
              <p className="text-xl text-justify">
                Ein Jahr besteht aus insgesamt 365 Tagen. Doch wie viele Tage bleiben bis zum Ende des Jahres? Diese Antwort findest du hier auf unserer Website.
                Es ist von großer Bedeutung, zu wissen, wie viele Tage das Jahr noch zählt. Zeitmanagement ist eine äußerst wichtige Fähigkeit, die einem hilft,
                sein Leben im Blick zu behalten. Wenn du weißt, wie viele Tage im Jahr noch verbleiben, wird dir dies erheblich erleichtert. Du kannst besser planen
                und Ziele setzen, basierend auf der verbleibenden Anzahl an Tagen.</p>
            </div>
          </div>
        </div>


        <div className="mx-4 md:w-1/2 mt-5 md:m-auto">
          <h2 className="text-6xl text-bolder">Wieso ist Zeit Management wichtig?</h2>
        </div>


        <div className="flex justify-center items-center sm:mt-4 md:mt-0">
          <div className="text-black h-60 flex justify-center items-center">
            <div className="mx-4 md:w-1/2 mt-5">
              <p className="text-xl text-justify">
                Zeitmanagement ist eine entscheidende Fähigkeit, die in allen Bereichen des Lebens von großer Bedeutung ist. Es geht darum, die Zeit,
                die uns zur Verfügung steht, effizient und effektiv zu nutzen, um unsere Ziele zu erreichen und ein ausgewogenes Leben zu führen.
                Eine der wichtigsten Gründe für gutes Zeitmanagement ist die Steigerung der Effizienz. Durch eine kluge Zeiteinteilung können wir unsere
                Produktivität erhöhen. Indem wir unsere Aufgaben priorisieren und Zeit für diejenigen Aktivitäten reservieren, die uns am meisten voranbringen,
                vermeiden wir unnötige Verzögerungen und maximieren unseren Output.</p>
            </div>
          </div>
        </div>

        <section className="">
          <div className="flex justify-center">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 md:w-1/2 mt-4 m-auto gap-4">
              <div className="">
                <p className="sm:mx-4 md:mx-0 text-xl text-justify">
                  Ein weiterer Vorteil eines effektiven Zeitmanagements ist die Reduzierung von Stress. Indem wir unsere Zeit gut planen und organisieren,
                  vermeiden wir das Gefühl, überfordert oder überwältigt zu sein. Dies ermöglicht es uns, gelassener und stressfreier durch den Tag zu
                  gehen und unsere mentale Gesundheit zu schützen.
                </p>
              </div>
              <div className="sm:mx-4 md:mx-0 w-auto h-auto">
                <img class="rounded-lg" src={blog_cover_1} alt="Füllbild" />
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-center items-center mt-4">
          <div className="text-black h-auto flex justify-center items-center">
            <div className="mx-4 md:w-1/2 mt-5">
              <p className="text-xl text-justify">
                Zeitmanagement spielt auch eine wichtige Rolle bei der Erreichung unserer Ziele. Es hilft uns, unsere Ziele klar zu definieren und die notwendigen
                Schritte zu unternehmen, um sie zu erreichen. Durch eine effektive Nutzung unserer Zeit und die Fokussierung auf die Aufgaben, die uns unserem Ziel
                näherbringen, steigern wir unsere Erfolgschancen und verwirklichen unsere Träume. Darüber hinaus trägt gutes Zeitmanagement zu einer besseren
                Work-Life-Balance bei. Durch eine gute Zeitplanung können wir Arbeit und persönliches Leben besser in Einklang bringen. Indem wir unsere Zeit
                entsprechend einteilen und Prioritäten setzen, können wir genug Zeit für Familie, Freunde, Hobbys und Erholung reservieren, was zu einem
                ausgeglicheneren und erfüllteren Leben führt. Nicht zuletzt hilft uns Zeitmanagement, Chancen besser zu nutzen. Zeit ist eine begrenzte Ressource,
                und es ist wichtig, sie optimal zu nutzen. Indem wir unsere Zeit effektiv managen, können wir uns die Gelegenheiten, die sich uns bieten,
                besser zunutze machen. Wir verpassen weniger Chancen und sind besser darauf vorbereitet, wenn sich neue Möglichkeiten ergeben. Insgesamt ist
                Zeitmanagement eine grundlegende Fähigkeit, die uns dabei hilft, unser Leben besser zu organisieren, unsere Ziele zu erreichen und ein erfülltes
                Leben zu führen. Es ermöglicht uns, unsere Zeit so einzusetzen, dass wir das Beste aus jedem Tag herausholen können.
              </p>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </body>
    </html>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
