import { create, act } from 'react-test-renderer';
import Home from '../views/Home';
import NewsList from '../components/NewsList';
import axios from 'axios';


import renderer from 'react-test-renderer'
import styled from 'styled-components';
import 'jest-styled-components';

let component;

describe("<Home />", () => {
  beforeEach(async () => {
    await act(async () => {
      component = await renderer.create(
      <NewsList data={[]}/>
      ).toJSON()
    });
  });



  it("LLamada a la API", async () => {

    const testData = {
      hits: [
        {
          author: "mhitza",
          comment_text: "&gt; Javascript =&#x2F;= the DOM<p>My post was explicit in the fact that this was my frontend JavaScript path.<p>I don&#x27;t think they are DOM abstraction, rather they are &quot;update abstractions&quot;, as all the data binding, two way bindings, (whatever way binding a future library might call it) is there to observe X, update piece of html fragment Y with X.<p>The vanilla JavaScript idea is to debloat application and unlayer complexity where its possible. It doesn&#x27;t offer the niceties, or feature parity of what frameworks do, but it allows me to be more explicit in the places where I&#x27;m going to use a framework. E.g. might have handrolled JavaScript code for light interactivity for a website for 90% of the time, and going to use something like VueJS only on the pages that require some highly integrated state associated page components.<p>The people in my circles, didn&#x27;t hate DOM manipulation. They just didn&#x27;t understand it (or care to), and jQuery answers where all over stackoverflow (just use this library and this jQuery plugin call).<p>And yes, without jQuery&#x2F;frameworks DOM building is tedious. I&#x27;ve seen JSX praised before, but in an alternate timeline where IE didn&#x27;t dominate the entire world with a legacy PoS, maybe the E4X standard would have been implemented in all browsers. Which would have been a pretty sweet deal, and another useful tool for the vanilla JavaScript camp.",
          created_at: "2022-04-27T14:03:09.000Z",
          created_at_i: 1651068189,
          num_comments: null,
          objectID: "31180018",
          parent_id: 31178995,
          points: null,
          story_id: 31176910,
          story_text: null,
          story_title: "Four Eras of JavaScript Frameworks",
          story_url: "https://www.pzuraq.com/blog/four-eras-of-javascript-frameworks",
          title: null,
          url: null,
        }
      ]
    }

  /* axios.get.mockImplementation(() => Promise.resolve(testData));

    await act(async () => {
      await component.update(
        <NewsList data={testData.hits}/>
      )
    }) */
  })
})

