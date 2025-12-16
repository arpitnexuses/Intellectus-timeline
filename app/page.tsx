import { Calendar } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-2 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
          {[19, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((originalIndex) => (
            <Card key={originalIndex} className={`bg-white border border-gray-200 rounded-lg p-2 sm:p-4 relative min-h-[140px] sm:min-h-[160px] w-full transition-all duration-300 ease-in-out hover:scale-105 hover:border-2 hover:border-[#26baf1] hover:shadow-lg cursor-pointer ${
              originalIndex % 2 === 0
                ? 'sm:ml-4 sm:mr-0 sm:w-[calc(100%-1rem)]'
                : 'sm:mr-4 sm:ml-0 sm:w-[calc(100%-1rem)]'
            }`}>
              <div className="absolute top-1 right-1 sm:top-4 sm:right-4">
                <span className="text-gray-400 text-[10px] sm:text-sm font-medium">
                  {originalIndex === 6
                    ? "$100,000,000+"
                    : originalIndex === 8
                      ? "$80,000,000+"
                      : originalIndex === 9
                        ? "$100,000,000"
                      : originalIndex === 10
                        ? "$50,000,000+"
                        : originalIndex === 12
                          ? "$14,000,000"
                            : originalIndex === 13
                              ? "$20,000,000"
                          : originalIndex === 14
                            ? "$80,000,000"
                            : originalIndex === 15
                              ? "$238,000,000"
                              : originalIndex === 16
                                ? "$132,000,000"
                                : originalIndex === 17
                                  ? "$90,000,000"
                                  : originalIndex === 18
                                    ? "$500,000,000"
                                    : "Undisclosed"}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                {originalIndex === 0 ? (
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
                ) : originalIndex === 1 ? (
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
                ) : originalIndex === 2 ? (
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
                ) : originalIndex === 3 ? (
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
                ) : originalIndex === 4 ? (
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
                ) : originalIndex === 5 ? (
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
                ) : originalIndex === 6 ? (
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
                ) : originalIndex === 7 ? (
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
                ) : originalIndex === 8 ? (
                  /* Card 9 - Logo removed */
                  <div className="flex-shrink-0 mt-1 flex justify-start">
                    {/* Logo removed */}
                  </div>
                ) : originalIndex === 9 ? (
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
                ) : originalIndex === 10 ? (
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
                ) : originalIndex === 11 ? (
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
                ) : originalIndex === 12 ? (
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
                ) : originalIndex === 13 ? (
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
                ) : originalIndex === 14 ? (
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
                ) : originalIndex === 15 ? (
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
                ) : originalIndex === 16 ? (
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
                ) : originalIndex === 17 ? (
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
                ) : originalIndex === 18 ? (
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
                ) : originalIndex === 19 ? (
                  /* Card 20 - 20.png */
                  <div className="flex-shrink-0 mt-1 flex justify-start">
                    <Image
                      src="/20.png"
                      alt="Card 20 Logo"
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
                    {originalIndex === 1
                      ? "Worldsmart"
                      : originalIndex === 2
                        ? "Igneo"
                        : originalIndex === 3
                          ? "Landchecker"
                          : originalIndex === 4
                            ? "Elula"
                            : originalIndex === 5
                              ? ".ID Consulting"
                              : originalIndex === 6
                                ? "PowerHealth Solutions"
                                : originalIndex === 7
                                  ? "Lanser Communities"
                                  : originalIndex === 8
                                    ? "ASX-listed Comms & Tech Co."
                                      : originalIndex === 9
                                        ? "ResourceCo"
                                    : originalIndex === 10
                                      ? "Boart Longyear"
                                          : originalIndex === 11
                                            ? "CPR Pharma / Avance Clinical / Agilex Biolabs"
                                      : originalIndex === 12
                                        ? "Udder Delights"
                                              : originalIndex === 13
                                                ? "Myriotia"
                                        : originalIndex === 14
                                          ? "Marvel Packers"
                                          : originalIndex === 15
                                            ? "Lloyd Electric & Engineering Ltd"
                                            : originalIndex === 16
                                              ? "Max Healthcare"
                                              : originalIndex === 17
                                                ? "Dabur"
                                                  : originalIndex === 18
                                                    ? "Jaypee Group Cement Assets"
                                                    : originalIndex === 19
                                                      ? "Harrier National"
                                                      : "Viostream"}
                  </h3>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-1 sm:mb-2 justify-start">
                    <span className="bg-orange-100 text-orange-700 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md text-[10px] sm:text-xs font-medium">
                      {originalIndex === 1
                        ? "Retail Tech"
                        : originalIndex === 2
                          ? "Waste Management"
                          : originalIndex === 3
                            ? "Data & Analytics"
                            : originalIndex === 4
                              ? "Ai Tech"
                              : originalIndex === 5
                                ? "Consulting"
                                : originalIndex === 6
                                  ? "Health Tech"
                                  : originalIndex === 7
                                    ? "Property Development"
                                    : originalIndex === 8
                                      ? "Communications"
                                      : originalIndex === 9
                                        ? "Recycling & Waste"
                                      : originalIndex === 10
                                        ? "Mining Services"
                                          : originalIndex === 11
                                            ? "Pharmaceuticals"
                                        : originalIndex === 12
                                          ? "Food & Beverage"
                                              : originalIndex === 13
                                                ? "Space Tech"
                                          : originalIndex === 14
                                            ? "Food Manufacturing"
                                            : originalIndex === 15
                                              ? "Manufacturing"
                                              : originalIndex === 16
                                                ? "Healthcare"
                                                : originalIndex === 17
                                                  ? "FMCG"
                                                  : originalIndex === 18
                                                    ? "Infrastructure"
                                                    : originalIndex === 19
                                                      ? "Auto Tech"
                                                      : "Video Tech"}
                    </span>
                    <span className="bg-green-100 text-green-700 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md text-[10px] sm:text-xs font-medium">
                      {originalIndex === 2
                        ? "Industrials"
                        : originalIndex === 3
                          ? "PropTech"
                          : originalIndex === 4
                            ? "SaaS"
                            : originalIndex === 5
                              ? "Demographic Data Analytics"
                              : originalIndex === 6
                                ? "SaaS"
                                : originalIndex === 7
                                  ? "Property Development"
                                  : originalIndex === 8
                                    ? "Technology"
                                      : originalIndex === 9
                                        ? "Resource Recovery"
                                    : originalIndex === 10
                                      ? "Drilling Equipment"
                                          : originalIndex === 11
                                            ? "Clinical Trials & Bioanalytics"
                                      : originalIndex === 12
                                        ? "Dairy Products"
                                              : originalIndex === 13
                                                ? "IoT Communications"
                                        : originalIndex === 14
                                          ? "Frozen Food"
                                          : originalIndex === 15
                                            ? "Consumer Durables"
                                            : originalIndex === 16
                                              ? "Hospitals & Clinics"
                                              : originalIndex === 17
                                                ? "Personal & Healthcare Products"
                                                : originalIndex === 18
                                                  ? "Cement Manufacturing"
                                                  : originalIndex === 19
                                                    ? "B2B SaaS"
                                                    : "B2B SaaS"}
                    </span>
                  </div>
                  <p className="text-gray-600 text-[10px] sm:text-sm pb-[5px] sm:pb-[8px] leading-relaxed">
                    {originalIndex === 2
                      ? "Buy side – Acquisition by Igneo Infrastructure Partners"
                      : originalIndex === 3 || originalIndex === 4
                        ? "Buy side – Significant minority acquired by PEXA"
                        : originalIndex === 5
                          ? "Buy side – 100% equity acquired by PEXA"
                          : originalIndex === 6
                            ? "Sell side – Majority stake sale to Telstra Health"
                            : originalIndex === 7
                              ? "Capital raise for development fund"
                              : originalIndex === 8
                                ? "Buy side – Acquisition of North American communications business"
                                  : originalIndex === 9
                                    ? "Sell side – Divestment of 50% interest of RRF to Cleanaway"
                                : originalIndex === 10
                                  ? "Sell side – Sale of Southeast Asia rigging assets"
                                      : originalIndex === 11
                                        ? "Sell side – Formation into leading clinical and bioanalytics services businesses"
                                  : originalIndex === 12
                                    ? "Sell side – Sale to Megmilk Snow Brand Co., Ltd."
                                          : originalIndex === 13
                                            ? "Series A capital raise from Boeing Horizon X Ventures & Singtel Innov8"
                                    : originalIndex === 14
                                      ? "Sell side – Sale to Private Equity consortium"
                                      : originalIndex === 15
                                        ? "Sell side – Sale of consumer durable business"
                                        : originalIndex === 16
                                          ? "Buy side – Stake increase from 26% to 46% by Life Healthcare Group"
                                          : originalIndex === 17
                                            ? "Buy side – Acquisition by India's largest domestic FMCG company"
                                            : originalIndex === 18
                                              ? "Sell side – Sale of 6 cement assets (>5 MTPA capacity)"
                                              : originalIndex === 19
                                                ? "Buy side – Acquisition by Banyan Software"
                                                : "Buy side - Acquisition by Banyan Software"}
                  </p>
                </div>
              </div>

              {/* Date in bottom right */}
              <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-4 flex items-center gap-0.5 sm:gap-1 text-gray-500">
                <Calendar className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
                <span className="text-[10px] sm:text-sm">
                  {originalIndex === 3 || originalIndex === 4 || originalIndex === 5 || originalIndex === 7 || originalIndex === 8
                    ? "2022"
                    : originalIndex === 6
                      ? "2021"
                      : originalIndex === 9
                        ? "2019"
                        : originalIndex === 10
                          ? "2019"
                          : originalIndex === 11
                            ? "2018"
                        : originalIndex === 12
                              ? "2018"
                              : originalIndex === 13
                          ? "2018"
                          : originalIndex === 14
                            ? "2017"
                            : originalIndex === 15 || originalIndex === 16
                              ? "2016"
                              : originalIndex === 17
                                ? "2014-2015"
                                : originalIndex === 18
                                  ? "2013-2016"
                                  : originalIndex === 19
                                    ? "2025"
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

