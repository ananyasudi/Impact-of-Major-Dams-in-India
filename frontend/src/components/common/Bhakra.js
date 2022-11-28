import "./styles2.css";
import { Gallery } from "react-grid-gallery";
import { Dot } from 'react-bootstrap-icons';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItem';

export default function BhakraNangal() {
    const images = [
        {
           src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
           width: 500,
           height: 500,
           isSelected: true,
           caption: "After Rain (Jeshu John - designerspics.com)",
           
        },
        {
           src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
           width: 500,
           height: 500,
           tags: [
              { value: "Ocean", title: "Ocean" },
              { value: "People", title: "People" },
           ],
           alt: "Boats (Jeshu John - designerspics.com)",
        },
     
        {
           src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
           width: 500,
           height: 500,
        },
     ];
    return (
        <div id="super-body">
            <div class="sidenav">
                <a href="#Positive-impact regarding food production">Positive-impact regarding food production</a>
                <a href="#Displacement and Rehabilitation">Displacement and Rehabilitation</a>
                <a href="#Submergence">Submergence</a>
                <a href="#Fisheries">Fisheries</a>
                <a href="#Health impacts">Health impacts</a>
                <a href="#Crisis in Punjab and Haryana Agriculture">Crisis in Punjab and Haryana Agriculture</a>

            </div>

            {/* <div class="vl"></div> */}
            <div className="App2" id="body-dam" class = "dot_size">
                <br></br>
                <br></br>

                <h1 id="Positive-impact regarding food production">Positive-impact regarding food production</h1>
                <br></br>
                <p><Dot/>
                Punjab, Haryana and Andhra Pradesh have emerged as the granaries of the nation growing more than two-thirds of the total rice crop of the country as a result of the irrigation benefits reaped from the Bhakra Nangal and the Nagarjuna Sagar Dam
                </p>
                <p><Dot />
                Dams built in Punjab and Haryana turned these states into the food baskets of the country and have helped make India self sufficient in foodgrain production.
                </p>
                <p><Dot />
                Food Self-Sufficiency = Punjab & Haryana = Bhakra. 
                </p>
                <p><Dot />
                The irrigation from the Bhakra-Nangal project began in 1953-54, when about 46,000 acres were irrigated. In 1955-56, the last year of the First Plan, the irrigation from the project was about 1 million acres. (418,000 ha). By the time the second plan ended (in 1960-61) Bhakra was irrigating 1.7 m acres and by 1963-64 this had reached 2.48 m acres. For all practical purposes, this was the full development of the irrigation from the project
                </p>
                <br></br>

                <h1 id="Displacement and Rehabilitation">Displacement and Rehabilitation</h1>
                <br></br>
                <p>
                   <Dot />
                   According to the BBMB, the Bhakra dam submerged 44153 acres (17876 ha ) of land due to which 371 villages were displaced.1 BBMB further states that 7206 families were affected comprising about 36,000 persons. But these were only the land-owning families. There is no reckoning of the landless people in these numbers. This is quite simply the practice with most of the large dams in the country. Out of the total land, 23863 acres was private land. 
                </p>
                <p>
                   <Dot />
                   The displacement seems to have occurred in two stages. Initially the people upto 1280 feet level were displaced. They were given only cash compensation. The people affected above 1280 feet up to 1700 feet level, were given a choice to either accept land or cash compensation. Most of these were oustees who chose to continue to live in Himachal Pradesh itself – simply moving up the slopes of the hills on the side of the river – as they had no other place to go. The facilities provided for those settling in Himachal Pradesh , according to BBMB, were – free fishing licenses in Govind Sagar for three years, new ferries, roads and village paths in lieu of those submerged, gainful employment on the dam

                </p>
                <br></br>

                <h1 id="Submergence">Submergence</h1>
                <br></br>
                <p>
                    <Dot/>
                    The Bhakra dam submerged about 178.75 sq. km (17875 ha) of land area3 . Another 1000 acres (400 ha) was acquired for the Nangal township.
                    </p>
                    <p> <Dot/>
                    Out of the total area submerged, 5,750 ha was forest land 4 . The impact of the submergence of the forests on the flora and fauna has not been estimated
                </p>
                <p> <Dot/>
                The plains on the banks of the river were extremely fertile. Both the kharif and the rabi crops could be cultivated. Irrigation was done with water from the Sutlej and the large number of natural streams flowing into the plains from the mountains. A variety of crops like corn, wheat and cotton grew there. Most people also owned orchards. There was a substantially large cattle economy in this region. While the people lived in the plains, the cattle sheds were situated in the mountains where there was ample fodder for the cattle to graze on. 
                </p>
                <br></br>

                <h1 id="Fisheries">Fisheries</h1>
                <br></br>

                <p> < Dot/>
                The Fisheries department is also promoting exotic species of fish in an effort to introduce blue revolution at the cost of native species. Four exotic sps have been introduced as a result of which several native sps (especially Mahseer which was a common & delicious native fish of Punjab) have been lost/threatened. Data indicates that 32 sps of fish are near threatened, 20 sps are vulnerable, 12 sps are endangered and 2 sps are critically endangered.
                </p>
                <p> < Dot/>
                Before the reservoir, the species caught were the much sought after Mahseer, Gidd, Mir Carp. After the creation of the reservoir, the mahseer declined sharply and it is rarely found. The earlier species were replaced by Catla, Rohu and Singada. But now, even that has changed and about 90% of the catch is silver carp whose returns are much smaller.
                </p>
                <p> < Dot/>
                The species composition in the reservoir/submergence area has changed dramatically, with major portion of the yield coming from less valuable fish.
                </p>
                <p> < Dot/>
                Between 1971-72 and 1978-79, major carps, viz., catla, rohu and mrigal contributed to the bulk of the total production from Govindsagar reservoir. Later, however, with the rise in the population of silver carp, the production of catla was lowered. The feeding and breeding vigour exhibited by silver carp led to its stabilisation at the cost of catla. Increase in silver carp population in the Gobindsagar reservoir catch has not increased the overall production of the reservoir (Natarajan, 1989). It is just a case of substitution of two high value indigenous major carp species by an exotic carp that is poor in quality fetching lower economic returns.
                </p>
                <br></br>

                <h1 id="Health impacts">Health impacts in the reservoir area</h1>
                <br></br>

                <p> <Dot />
                The reservoirs [Govind Sagar] covered all the natural water sources and are now depending (sic) on the lake water as well as the water supply scheme provided by the Govt. These water supply schemes become dry during the summer season and most of the people have to depend for water which is not all the time can be consider potable
                </p>
                <p> <Dot />
                In view of the situation as explained above there has been rise in Gastroentritis, entric fever and viral hepatitis incidence due to scarcity of protable (sic) water for the people residing on the both side of bank reservoirs. From the record available with this department the incidence of these diseases has increased despite on-going health programmes.
                </p>
                <p> <Dot />
                The reservoir provides favourable conditions for mosquito breedings and hence the incidence of malaria has also increased.
                </p>
                <p> <Dot />
                Whole of the reservoirs and surroundings areas is covered with fog which last upto 11 to 12 hours in a day during winter and the respiratory diseases are also on increase.
                </p>
                <p> <Dot />
                The fog reduces the visibility leading to more incidence of accidents. Half of the normal health budget is being spent to tackle these diseases….
                </p>
                <br></br>
                <h1 id="Crisis in Punjab and Haryana Agriculture">Crisis in Punjab and Haryana Agriculture</h1>
                <br></br>

                <p> <Dot />
                Elements of this collapse:
                <div>
                    &emsp;&emsp;&emsp;A. Land degradation, including waterlogging and salinisation <br></br>
                    &emsp;&emsp;&emsp;B. Sharp decline in ground water levels <br></br>
                    &emsp;&emsp;&emsp;C. Loss of diversity in cropping pattern <br></br>
                    &emsp;&emsp;&emsp;D. Stagnant or falling yields <br></br>
                    &emsp;&emsp;&emsp;E. Increasing inputs, declining returns, the worsening economics of agriculture<br></br>
                    &emsp;&emsp;&emsp;F. Indebtedness of farmers  <br></br>
                </div>
                </p>
                <p> <Dot />
                There were strong reasons for the state to reduce overall dependence on wheat and rice on ecological considerations also. The two crops system repeating year after year for the past about one and half decade on an extensive scale had made the agro eco-system of the State extremely fragile in the context of pests and crop diseases, soil health, human health and the overall living environment. 
                </p>
                <p> <Dot />
                In short the committee realised that if the situation kept deteriorating at that rate, farmers of the State would suffer an acute economic squeeze and there would be a serious problem of market clearance in addition to over exploitation and increasing irrational use of scarce water resources and deterioration of agro-ecosystem of the State.
                </p>
                <p> <Dot />
                Agriculture in both these states has been reduced to virtual mono-cropping, with the wheat-rice or wheat-cotton cycle dominating overwhelmingly. In Punjab, wheat and rice together constitute over 75% of the gross cropped area.
                </p>
                <p> <Dot />
                In Punjab, average rice yields for the state reached a maximum of 3510 kgs/ha in 1989-90 and have been falling in the subsequent years
                </p>
                <p> <Dot />
                The State of Punjab has witnessed record production of cotton i.e. 26 lakh bales during the year 1989-90. The average yield of cotton (570 kg lint / ha) in Punjab was also the highest in the country. However, within a span of 10 years, there has been a drastic decline in both production and productivity of cotton. During 1998-99, state could harvest hardly 7 lakh bales with productivity of 206 kg lint/ ha
                </p>
                <p> <Dot />
                Farmers have to keep putting more and more fertilisers to maintain yield; more and more pesticides to control the pests. But the soil is not responding. This is not the law of diminishing marginal returns. More inputs are required to maintain the same level of returns. 
                </p>
                <p> <Dot />
                The districts of Hissar, Sirsa and Fatehbad grow about 75% of Haryana’s cotton. They also have about 75% of its land area under cotton. In some areas, the excess moisture has impacted this crop. This has had in turn a serious impact on the downstream industries like ginning factories.
                </p>
            </div>
            <br></br>
            <Grid container spacing={2}>
  <Grid item xs={8}>
    {/* <Item style={{marg:200px}}><img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2019/06/Bhakra-Nangal-Dam-Facts1.jpg"></img></Item> */}
  </Grid>
  <Grid item xs={4}>
    <Item><img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2019/06/Bhakra-Nangal-Dam-Facts1.jpg"></img></Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid>
        </div>
    );
}
