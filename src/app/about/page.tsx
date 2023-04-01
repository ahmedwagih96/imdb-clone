import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <div className="max-w-6xl mx-auto space-y-4 px-2">
      <h1 className="text-2xl font-medium text-amber-600">About</h1>
      <div>
        <p>IMDb (an acronym for Internet Movie Database) is an online database of information related to films, television series, podcasts, home videos, video games, and streaming content online including cast, production crew and personal biographies, plot summaries, trivia, ratings, and fan and critical reviews. </p>
        <p>IMDb began as a fan-operated movie database on the Usenet group &quot;rec.arts.movies&quot; in 1990, and moved to the Web in 1993. Since 1998, it is now owned and operated by IMDb.com, Inc., a subsidiary of Amazon.</p>
        <p>As of March 2022, the database contained some 10.1 million titles (including television episodes) and 11.5 million person records. Additionally, the site had 83 million registered users. The site&apos;s message boards were disabled in February 2017.</p>

      </div>
    </div>
  );
}

export default About;
