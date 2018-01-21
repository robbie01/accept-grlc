# accept-grlc: the ~~hip~~ wip new way to accept garlicoins on your website with garlium wallet

note: this is unusable on mainnet until garlium is re-released

how to use:

first run `npm install`

create a file called `.env` and add the following

```
RPC_HOST=rpc server hostname, defaults to localhost
RPC_PORT=rpc server port, defaults to 80
RPC_USER=rpc server username
RPC_PASS=rpc server password
```

to start, run `npm start`
to start with a custom port, add `PORT=<port> to the start of the command`
