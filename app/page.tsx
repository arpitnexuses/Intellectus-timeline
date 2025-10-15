import { Calendar } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-2 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* PEXA Logo Header */}
        <div className="flex justify-center items-center mb-6 sm:mb-8 lg:mb-12">
          <div className="relative">
            <Image
              src="/20.png"
              alt="PEXA Logo"
              width={200}
              height={80}
              className="h-12 w-auto sm:h-16 sm:w-auto lg:h-20 lg:w-auto object-contain transition-all duration-300 hover:scale-105"
              priority
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
          {Array.from({ length: 19 }, (_, index) => (
            <Card key={index} className={`bg-white border border-gray-200 rounded-lg p-2 sm:p-4 relative min-h-[140px] sm:min-h-[160px] w-full transition-all duration-300 ease-in-out hover:scale-105 hover:border-2 hover:border-[#26baf1] hover:shadow-lg cursor-pointer ${
              index % 2 === 0
                ? 'sm:ml-4 sm:mr-0 sm:w-[calc(100%-1rem)]'
                : 'sm:mr-4 sm:ml-0 sm:w-[calc(100%-1rem)]'
            }`}>
              <div className="absolute top-1 right-1 sm:top-4 sm:right-4">
                <span className="text-gray-400 text-[10px] sm:text-sm font-medium">
                  {index === 6
                    ? "$100,000,000+"
                    : index === 8
                      ? "$80,000,000+"
                      : index === 9
                        ? "$100,000,000"
                      : index === 10
                        ? "$50,000,000+"
                        : index === 12
                          ? "$14,000,000"
                            : index === 13
                              ? "$20,000,000"
                          : index === 14
                            ? "$80,000,000"
                            : index === 15
                              ? "$238,000,000"
                              : index === 16
                                ? "$132,000,000"
                                : index === 17
                                  ? "$90,000,000"
                                  : index === 18
                                    ? "$500,000,000"
                                    : "Undisclosed"}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                {index === 0 ? (
                  /* Card 1 - 1.png */
                  <div className="flex-shrink-0 mt-1 flex justify-start">
                    <Image
                      src="/1.png"
                      alt="Card 1 Logo"
                      width={120}
                      height={120}
                      className="h-16 w-20 sm:h-20 sm:w-28 object-contain"
                    />
                  </div>
                ) : index === 1 ? (
                  /* Card 2 - 2.png */
                  <div className="flex-shrink-0 mt-1 flex justify-start">
                    <Image
                      src="/2.png"
                      alt="Card 2 Logo"
                      width={120}
                      height={120}
                      className="h-16 w-20 sm:h-20 sm:w-28 object-contain"
                    />
                  </div>
                ) : index === 2 ? (
                  /* Card 3 - 3.png */
                  <div className="flex-shrink-0 mt-1 flex justify-start">
                    <Image
                      src="/3.png"
                      alt="Card 3 Logo"
                      width={120}
                      height={120}
                      className="h-16 w-20 sm:h-20 sm:w-28 object-contain"
                    />
                  </div>
                ) : index === 3 ? (
                  /* Card 4 - 4.png */
                  <div className="flex-shrink-0 mt-1 flex justify-start">
                    <Image
                      src="/4.png"
                      alt="Card 4 Logo"
                      width={120}
                      height={120}
                      className="h-16 w-20 sm:h-20 sm:w-28 object-contain"
                    />
                  </div>
                ) : index === 4 ? (
                  /* Card 5 - 5.png */
                  <div className="flex-shrink-0 mt-1 flex justify-start">
                    <Image
                      src="/5.png"
                      alt="Card 5 Logo"
                      width={120}
                      height={120}
                      className="h-16 w-20 sm:h-20 sm:w-28 object-contain"
                    />
                  </div>
                ) : index === 5 ? (
                  /* Card 6 - 6.png */
                  <div className="flex-shrink-0 mt-1 flex justify-start">
                    <Image
                      src="/6.png"
                      alt="Card 6 Logo"
                      width={120}
                      height={120}
                      className="h-16 w-20 sm:h-20 sm:w-28 object-contain"
                    />
                  </div>
                ) : index === 6 ? (
                  /* Card 7 - 7.png */
                  <div className="flex-shrink-0 mt-1 flex justify-start">
                    <Image
                      src="/7.png"
                      alt="Card 7 Logo"
                      width={120}
                      height={120}
                      className="h-16 w-20 sm:h-20 sm:w-28 object-contain"
                    />
                  </div>
                ) : index === 7 ? (
                  /* Card 8 - 8.png */
                  <div className="flex-shrink-0 mt-1 flex justify-start">
                    <Image
                      src="/8.png"
                      alt="Card 8 Logo"
                      width={120}
                      height={120}
                      className="h-16 w-20 sm:h-20 sm:w-28 object-contain"
                    />
                  </div>
                ) : index === 8 ? (
                  /* Card 9 - Logo removed */
                  <div className="flex-shrink-0 mt-1 flex justify-start">
                    {/* Logo removed */}
                  </div>
                ) : index === 9 ? (
                  /* Card 10 - 10.png */
                  <div className="flex-shrink-0 mt-1 flex justify-start">
                    <Image
                      src="/10.png"
                      alt="Card 10 Logo"
                      width={120}
                      height={120}
                      className="h-16 w-20 sm:h-20 sm:w-28 object-contain"
                    />
                  </div>
                ) : index === 10 ? (
                  /* Card 11 - 11.png */
                  <div className="flex-shrink-0 mt-1 flex justify-start">
                    <Image
                      src="/11.png"
                      alt="Card 11 Logo"
                      width={120}
                      height={120}
                      className="h-16 w-20 sm:h-20 sm:w-28 object-contain"
                    />
                  </div>
                ) : index === 11 ? (
                  /* Card 12 - 12.png */
                  <div className="flex-shrink-0 mt-1 flex justify-start">
                      <Image
                      src="/12.png"
                      alt="Card 12 Logo"
                        width={120}
                      height={120}
                      className="h-16 w-20 sm:h-20 sm:w-28 object-contain"
                    />
                  </div>
                ) : index === 12 ? (
                  /* Card 13 - 13.png */
                  <div className="flex-shrink-0 mt-1 flex justify-start">
                    <Image
                      src="/13.png"
                      alt="Card 13 Logo"
                      width={120}
                      height={120}
                      className="h-16 w-20 sm:h-20 sm:w-28 object-contain"
                    />
                  </div>
                ) : index === 13 ? (
                  /* Card 14 - 14.png */
                  <div className="flex-shrink-0 mt-1 flex justify-start">
                    <Image
                      src="/14.png"
                      alt="Card 14 Logo"
                      width={120}
                      height={120}
                      className="h-16 w-20 sm:h-20 sm:w-28 object-contain"
                    />
                  </div>
                ) : index === 14 ? (
                  /* Card 15 - 15.png */
                  <div className="flex-shrink-0 mt-1 flex justify-start">
                    <Image
                      src="/15.png"
                      alt="Card 15 Logo"
                      width={120}
                      height={120}
                      className="h-16 w-20 sm:h-20 sm:w-28 object-contain"
                    />
                  </div>
                ) : index === 15 ? (
                  /* Card 16 - 16.png */
                  <div className="flex-shrink-0 mt-1 flex justify-start">
                    <Image
                      src="/16.png"
                      alt="Card 16 Logo"
                      width={120}
                      height={120}
                      className="h-16 w-20 sm:h-20 sm:w-28 object-contain"
                    />
                  </div>
                ) : index === 16 ? (
                  /* Card 17 - 17.png */
                  <div className="flex-shrink-0 mt-1 flex justify-start">
                    <Image
                      src="/17.png"
                      alt="Card 17 Logo"
                      width={120}
                      height={120}
                      className="h-16 w-20 sm:h-20 sm:w-28 object-contain"
                    />
                  </div>
                ) : index === 17 ? (
                  /* Card 18 - 18.png */
                  <div className="flex-shrink-0 mt-1 flex justify-start">
                    <Image
                      src="/18.png"
                      alt="Card 18 Logo"
                      width={120}
                      height={120}
                      className="h-16 w-20 sm:h-20 sm:w-28 object-contain"
                    />
                  </div>
                ) : index === 18 ? (
                  /* Card 19 - 19.png */
                  <div className="flex-shrink-0 mt-1 flex justify-start">
                    <Image
                      src="/19.png"
                      alt="Card 19 Logo"
                      width={120}
                      height={120}
                      className="h-16 w-20 sm:h-20 sm:w-28 object-contain"
                    />
                  </div>
                ) : (
                  /* Original logo section for all other cards */
                  <div className="flex items-center gap-2 flex-shrink-0 justify-start">
                    {/* Banyan logo square */}
                    <div className="w-16 h-16 bg-green-800 rounded-lg flex flex-col items-center justify-center">
                      <span className="text-white text-sm font-bold leading-tight">banyan</span>
                      <span className="text-white text-xs font-normal leading-tight">SOFTWARE</span>
                    </div>

                    {/* Viostream logo positioned directly to the right */}
                    <div className="flex items-center gap-1">
                      <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-blue-500 rotate-90"></div>
                      <span className="text-blue-500 text-sm font-medium">VIOSTREAM</span>
                    </div>
                  </div>
                )}

                {/* Content section on the right */}
                <div className="flex-1 text-left">
                  <h3 className="text-sm sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 pt-[15px]">
                    {index === 1
                      ? "Worldsmart"
                      : index === 2
                        ? "Igneo"
                        : index === 3
                          ? "Landchecker"
                          : index === 4
                            ? "Elula"
                            : index === 5
                              ? ".ID Consulting"
                              : index === 6
                                ? "PowerHealth Solutions"
                                : index === 7
                                  ? "Lanser Communities"
                                  : index === 8
                                    ? "ASX-listed Comms & Tech Co."
                                      : index === 9
                                        ? "ResourceCo"
                                    : index === 10
                                      ? "Boart Longyear"
                                          : index === 11
                                            ? "CPR Pharma / Avance Clinical / Agilex Biolabs"
                                      : index === 12
                                        ? "Udder Delights"
                                              : index === 13
                                                ? "Myriotia"
                                        : index === 14
                                          ? "Marvel Packers"
                                          : index === 15
                                            ? "Lloyd Electric & Engineering Ltd"
                                            : index === 16
                                              ? "Max Healthcare"
                                              : index === 17
                                                ? "Dabur"
                                                : index === 18
                                                  ? "Jaypee Group Cement Assets"
                                                  : "Viostream"}
                  </h3>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-1 sm:mb-2 justify-start">
                    <span className="bg-orange-100 text-orange-700 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md text-[10px] sm:text-xs font-medium">
                      {index === 1
                        ? "Retail Tech"
                        : index === 2
                          ? "Waste Management"
                          : index === 3
                            ? "Data & Analytics"
                            : index === 4
                              ? "Ai Tech"
                              : index === 5
                                ? "Consulting"
                                : index === 6
                                  ? "Health Tech"
                                  : index === 7
                                    ? "Property Development"
                                    : index === 8
                                      ? "Communications"
                                      : index === 9
                                        ? "Recycling & Waste"
                                      : index === 10
                                        ? "Mining Services"
                                          : index === 11
                                            ? "Pharmaceuticals"
                                        : index === 12
                                          ? "Food & Beverage"
                                              : index === 13
                                                ? "Space Tech"
                                          : index === 14
                                            ? "Food Manufacturing"
                                            : index === 15
                                              ? "Manufacturing"
                                              : index === 16
                                                ? "Healthcare"
                                                : index === 17
                                                  ? "FMCG"
                                                  : index === 18
                                                    ? "Infrastructure"
                                                    : "Video Tech"}
                    </span>
                    <span className="bg-green-100 text-green-700 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md text-[10px] sm:text-xs font-medium">
                      {index === 2
                        ? "Industrials"
                        : index === 3
                          ? "PropTech"
                          : index === 4
                            ? "SaaS"
                            : index === 5
                              ? "Demographic Data Analytics"
                              : index === 6
                                ? "SaaS"
                                : index === 7
                                  ? "Property Development"
                                  : index === 8
                                    ? "Technology"
                                      : index === 9
                                        ? "Resource Recovery"
                                    : index === 10
                                      ? "Drilling Equipment"
                                          : index === 11
                                            ? "Clinical Trials & Bioanalytics"
                                      : index === 12
                                        ? "Dairy Products"
                                              : index === 13
                                                ? "IoT Communications"
                                        : index === 14
                                          ? "Frozen Food"
                                          : index === 15
                                            ? "Consumer Durables"
                                            : index === 16
                                              ? "Hospitals & Clinics"
                                              : index === 17
                                                ? "Personal & Healthcare Products"
                                                : index === 18
                                                  ? "Cement Manufacturing"
                                                  : "B2B SaaS"}
                    </span>
                  </div>
                  <p className="text-gray-600 text-[10px] sm:text-sm pb-[5px] sm:pb-[8px] leading-relaxed">
                    {index === 2
                      ? "Buy side – Acquisition by Igneo Infrastructure Partners"
                      : index === 3 || index === 4
                        ? "Buy side – Significant minority acquired by PEXA"
                        : index === 5
                          ? "Buy side – 100% equity acquired by PEXA"
                          : index === 6
                            ? "Sell side – Majority stake sale to Telstra Health"
                            : index === 7
                              ? "Capital raise for development fund"
                              : index === 8
                                ? "Buy side – Acquisition of North American communications business"
                                  : index === 9
                                    ? "Sell side – Divestment of 50% interest of RRF to Cleanaway"
                                : index === 10
                                  ? "Sell side – Sale of Southeast Asia rigging assets"
                                      : index === 11
                                        ? "Sell side – Formation into leading clinical and bioanalytics services businesses"
                                  : index === 12
                                    ? "Sell side – Sale to Megmilk Snow Brand Co., Ltd."
                                          : index === 13
                                            ? "Series A capital raise from Boeing Horizon X Ventures & Singtel Innov8"
                                    : index === 14
                                      ? "Sell side – Sale to Private Equity consortium"
                                      : index === 15
                                        ? "Sell side – Sale of consumer durable business"
                                        : index === 16
                                          ? "Buy side – Stake increase from 26% to 46% by Life Healthcare Group"
                                          : index === 17
                                            ? "Buy side – Acquisition by India's largest domestic FMCG company"
                                            : index === 18
                                              ? "Sell side – Sale of 6 cement assets (>5 MTPA capacity)"
                                              : "Buy side - Acquisition by Banyan Software"}
                  </p>
                </div>
              </div>

              {/* Date in bottom right */}
              <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-4 flex items-center gap-0.5 sm:gap-1 text-gray-500">
                <Calendar className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
                <span className="text-[10px] sm:text-sm">
                  {index === 3 || index === 4 || index === 5 || index === 7 || index === 8
                    ? "2022"
                    : index === 6
                      ? "2021"
                      : index === 9
                        ? "2019"
                        : index === 10
                          ? "2019"
                          : index === 11
                            ? "2018"
                        : index === 12
                              ? "2018"
                              : index === 13
                          ? "2018"
                          : index === 14
                            ? "2017"
                            : index === 15 || index === 16
                              ? "2016"
                              : index === 17
                                ? "2014-2015"
                                : index === 18
                                  ? "2013-2016"
                                  : "2024"}
                </span>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Disclaimer text below the cards */}
         <div className="mt-4 sm:mt-8 text-left px-1 sm:px-0">
           <p className="text-[10px] sm:text-sm text-gray-600 leading-relaxed">
             <span className="text-black font-bold">Disclaimer:</span> Transactions prior to February 2022 were advised by the Partners in their previous roles.
          </p>
        </div>
      </div>
    </div>
  )
}

