import envVars from 'preact-cli-plugin-env-vars';

export default function (config, env, helpers) {
	delete config.node;
  envVars(config, env, helpers);
}