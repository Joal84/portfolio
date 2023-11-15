import _style from "./techstack.module.css";
import React from "react";
import AwsLogo from "../../../public/tech/aws.svg";
import CssLogo from "../../../public/tech/css.svg";
import DockerLogo from "../../../public/tech/docker.svg";
import FigmaLogo from "../../../public/tech/figma.svg";
import FlaskLogo from "../../../public/tech/flask.svg";
import GitLogo from "../../../public/tech/git.svg";
import HtmlLogo from "../../../public/tech/html.svg";
import JavaScriptLogo from "../../../public/tech/javascript.svg";
import MongoLogo from "../../../public/tech/mongodb.svg";
import NextLogo from "../../../public/tech/nextjs.svg";
import NodeLogo from "../../../public/tech/nodejs.svg";
import NumpyLogo from "../../../public/tech/numpy.svg";
import PandasLogo from "../../../public/tech/pandas.svg";
import PostgresLogo from "../../../public/tech/postgres.svg";
import PythonLogo from "../../../public/tech/python.svg";
import ReactLogo from "../../../public/tech/react.svg";
import ReduxLogo from "../../../public/tech/redux.svg";
import SqlLogo from "../../../public/tech/sql.svg";
import SvelteLogo from "../../../public/tech/svelte.svg";
import TensorflowLogo from "../../../public/tech/tensorflow.svg";
import TypescriptLogo from "../../../public/tech/typescript.svg";

export default function TechStack() {
  return (
    <div className={_style.container}>
      <div className={_style.logo_container}>
        <JavaScriptLogo className={_style.icon} />
        <h3>JavaScript</h3>
      </div>
      <div className={_style.logo_container}>
        <TypescriptLogo className={_style.icon} />
        <h3>TypeScript</h3>
      </div>
      <div className={_style.logo_container}>
        <GitLogo className={_style.icon} />
        <h3>Git</h3>
      </div>
      <div className={_style.logo_container}>
        <PythonLogo className={_style.icon} />
        <h3>Python</h3>
      </div>
      <div className={_style.logo_container}>
        <ReactLogo className={_style.icon} />
        <h3>React</h3>
      </div>
      <div className={_style.logo_container}>
        <ReduxLogo className={_style.icon} />
        <h3>Redux</h3>
      </div>
      <div className={_style.logo_container}>
        <NextLogo className={_style.icon} />
        <h3>Next.js</h3>
      </div>
      <div className={_style.logo_container}>
        <HtmlLogo className={_style.icon} />
        <h3>Html</h3>
      </div>
      <div className={_style.logo_container}>
        <CssLogo className={_style.icon} />
        <h3>Css</h3>
      </div>
      <div className={_style.logo_container}>
        <NodeLogo className={_style.icon} />
        <h3>Node.js</h3>
      </div>
      <div className={_style.logo_container}>
        <FlaskLogo className={_style.icon} />
        <h3>Flask</h3>
      </div>
      <div className={_style.logo_container}>
        <SvelteLogo className={_style.icon} />
        <h3>Svelte</h3>
      </div>
      <div className={_style.logo_container}>
        <DockerLogo className={_style.icon} />
        <h3>Docker</h3>
      </div>
      <div className={_style.logo_container}>
        <AwsLogo className={_style.icon} />
        <h3>AWS</h3>
      </div>
      <div className={_style.logo_container}>
        <MongoLogo className={_style.icon} />
        <h3>MongoDB</h3>
      </div>
      <div className={_style.logo_container}>
        <PostgresLogo className={_style.icon} />
        <h3>PostgreSQL</h3>
      </div>
      <div className={_style.logo_container}>
        <SqlLogo className={_style.icon} />
        <h3>SQL</h3>
      </div>

      <div className={_style.logo_container}>
        <TensorflowLogo className={_style.icon} />
        <h3>Tensorflow</h3>
      </div>
      <div className={_style.logo_container}>
        <NumpyLogo className={_style.icon} />
        <h3>Numpy</h3>
      </div>
      <div className={_style.logo_container}>
        <PandasLogo className={_style.icon} />
        <h3>Pandas</h3>
      </div>
      <div className={_style.logo_container}>
        <FigmaLogo className={_style.icon} />
        <h3>Figma</h3>
      </div>
    </div>
  );
}
