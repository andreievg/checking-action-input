import * as core from '@actions/core'

async function run(): Promise<void> {
  core.info(core.getInput('checkArray'))

try {
  //   const ms: string = core.getInput('milliseconds')
  //   core.debug(`Waiting ${ms} milliseconds ...`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true

  //   core.debug(new Date().toTimeString())
  //   await wait(parseInt(ms, 10))
  //   core.debug(new Date().toTimeString())

  //   core.setOutput('time', new Date().toTimeString())
  
   core.info(core.getInput('checkArray',{required: true}) )
} catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
