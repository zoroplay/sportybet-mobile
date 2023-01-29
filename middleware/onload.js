export default function({ store }) {
  if(store.state.sports.length < 1){
    store.dispatch("setCommitMenu");
  }
}
