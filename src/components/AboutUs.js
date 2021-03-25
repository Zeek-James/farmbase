import React from "react";
import media from "../utilies/images/pexels-jonas-von-werne-2168838.jpg";
import media1 from "../utilies/images/pexels-pat-whelen-6026441.jpg";
import media2 from "../utilies/images/african-farmer-woman-phone-640x403.png";
export const AboutUs = () => {
  return (
    <div className="m-3 p2">
      <section className="d-flex p-3 border-bottom mb-3 justify-content-around">
        <p className="m-3 w-50">
          The demand to eat locally-grown food has surged in recent years, and
          many restaurants have unveiled lavish menus with “local” written all
          over them. But how does the food get from farm to your plate? Consumer
          demand for local foods has surged in recent years. If you've ever sat
          down at a farm-to-table restaurant, you know that the experience can
          almost seem like magic: a delicious, locally-sourced meal simply
          appears on your plate, almost as if the farmer grew or raised the food
          in the kitchen itself. It supports the local community, the food is
          fresh, and the diner leaves satisfied. But where, exactly, does
          “locally-sourced” food come from? Surely, the farmer must be located
          nearby, if the term “farm-to-table” is to be believed. But where? Does
          the farmer drop off produce or meat at the restaurant each morning?
          Does the restaurant owner know the farmer personally? How does it all
          work? Wonder no more. The way food gets from the farm to your table is
          no mystery, but its mechanism is more surprising than many realize. Of
          course, the process begins — and ends — with the supply chain.
        </p>
        <img src={media} alt="#" className="border border-warning shadow-lg bg-white rounded" />
      </section>
      <section className="d-flex p-3 border-bottom mb-3 justify-content-around">
        <div className="m-3 w-50">
          <h3>Supply Logistics, Localized</h3>
          <p>
            Delivery can be a complicated affair, as it happens. On average,
            American metropolitan areas grow or raise less than 2% of the food
            that they consume, farm-to-table aside. even if all the green space
            in Seattle were used to grow food, for example, it wouldn’t feed
            more than 4% of the city’s population. This means that not only must
            the vast majority of all food be shipped into urban areas,
            locally-sourced, farm-to-table food must also be integrated into
            those distribution networks. So, generally speaking, the farmer does
            not drop food off personally. While some chefs choose to shop at
            local farmer’s markets, most farm-to-table restaurants have a
            distribution arrangement with a farm or farming cooperative — and
            sometimes the food can travel over long distances than you may
            expect. One of the most successful farm-to-table collectives in
            America, Ohio-based The Chef’s Garden, ships heirloom vegetables
            overnight to over 1,500 top-tier restaurants nationwide, as
            Entrepreneur notes. that’s shorter than the average 1,500 miles or
            so that most food travels, but it doesn’t quite fit the mental
            picture of “farm-to-table.” In this supply chain model, food must be
            transported to five different actors: the farmer; a processing
            center, where that food is collected; a regional distribution
            center; the local retailer (aka, the restaurant); and, finally, the
            hungry consumer. to top it off, those shipments must also be
            coordinated with the thousands of other orders carried along in the
            same trucks, freight cars, or planes -- organization of herculean
            proportions. of course, if the supply chain is quick, that food is
            still certifiably fresh.
          </p>
        </div>
        <img src={media1} alt="#" className="border shadow-lg  border-secondary rounded-right" />
      </section>
      <section className="d-flex p-3 border-bottom  mb-3 justify-content-around">
        <img src={media2} alt="#" className="border shadow-lg  border-secondary rounded-left" />
        <div className="m-3 w-50">
          <h3>Meeting Consumers at Market</h3>
          <p>
            The farm-to-table movement is largely driven by consumers, who
            demand increased visibility into the sources and quality of their
            food. Knowing that farm-to-table dining delivers fresh food and
            supports the local community is highly satisfying. But of course, it
            comes at a cost: consumers are willing to pay 12% more for local
            options, even those options aren’t as local as they first appear.
            This isn’t to say that dining patrons are being misled by “local”
            menu claims -- many restaurants specify that certain foods are
            delivered within X number of miles, or even name the supplying farm.
            But the ever-shrinking radius of what is acceptably local puts a
            strain on the supply chain. To meet faster turnaround times from an
            increasing number of small, local producers, supply chain companies
            are doing the opposite of getting back to their earthly roots;
            they’re getting high-tech. Using sophisticated order management
            software, electronic data exchange (edi) and analytics, and by
            automating shipping processes, companies are making farm-to-table
            delivery as low-impact and efficient as local farming itself. making
            local food appear at your table isn’t magic, but it entails supply
            chain processes that are even more impressive.
          </p>
        </div>
      </section>
    </div>
  );
};
