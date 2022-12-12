import { component$ } from '@builder.io/qwik';
import data from '../../consts/companies.json';
// import type { DocumentHead } from '@builder.io/qwik-city';
// import { Link } from '@builder.io/qwik-city';

export default component$(() => {

  return (
    <div>
      <div class="title">
      <h1>Choose your company</h1><br/>
      </div>
      <div class="cards">
        {data.companies.map((com)=>(
        <div class="card company">
          <div class="card__header company">
            <h2>{com.name}</h2></div>

          <div class="card__body">
          <div class="button__select">
              <a href={`/new-game/${com.id}/`}><button>
                Select
                </button>
                </a>
                </div>
            <div>{`Industry: ${com.industry}`}</div>
            <div>{`Stage: ${com.stage}`}</div>
            <div>{`Size: ${com.size}`}<br/></div>
            <div class="description">{com.description}</div>
          </div>
          <div class="card__footer">
            <div><b>Motto</b>: {com.motto}</div>
            <div><b>Initial DevOps Pipeline:</b> {com['initial-devops-pipeline'].map((pipe) => pipe.name).toString()}</div>
          </div>
          <div class="card__background">C</div>
        </div>
        ))}
      </div>
      <br></br>
      <button class="button-game" onClick$={ () => history.back() }>View instructions</button>
    </div>
  );
});
