const argv = process.argv
const command = argv[2]

switch (command) {
  case '--start':
    require('./start')(argv)
    break
  case '--build':
    require('./build')(argv)
    break
  default:
    throw new Error("The command is invalid.")
}