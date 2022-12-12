import { component$ } from "@builder.io/qwik";
import comp from "~/consts/companies.json";
import data from "../../../../consts/scenarios.json";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const location = useLocation();
  const company = comp.companies[Number(location.params.companyId) - 1];
  
  return (
    <div>
      <div class="title">
        <h1>{`${company.name}'s initial DevOps Pipeline`}</h1>
        <br />
      </div>
      <div class="cards add-margin">
        <div class="card scenario">
          <div class="card__header scenario">
            <h2>Scenario</h2>
          </div>
          <div id="scenario__card" class="card__body scenario">
            {
              data.scenarios[Math.floor(Math.random() * (36 - 0 + 1)) + 0]
                .scenario
            }
          </div>
          <div class="footer-buttons">
            <button class="footer-button">Dealt with</button>
            <button class="footer-button">Backlog</button>
          </div>
        </div>
      </div>
    </div>
  );
});

