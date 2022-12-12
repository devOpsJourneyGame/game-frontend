import { component$ } from "@builder.io/qwik";
import comp from "../../../consts/companies.json";
import { useLocation } from "@builder.io/qwik-city";
// import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  const location = useLocation();
  const company = comp.companies[Number(location.params.companyId) - 1];

  return (
    <div>
      <div class="title">
        <h1>{`${company.name}'s initial DevOps Pipeline`}</h1>
        <br />
      </div>
      <div class="cards">
        {company["initial-devops-pipeline"].map((pipe) => (
          
              <div class="card devops">
                <div class="card__header company">
                  <h2>{pipe.name}</h2>
                </div>
                <div class="card__body">
                  <div>{pipe.description}</div>
                </div>
                <div class="card__background">{pipe.type}</div>
              </div>
            ))
        }
      </div>
      <Link class="button-game" href={`/new-game/${location.params.companyId}/game`}>Go to scenarios!</Link>
    </div>
  );
});
