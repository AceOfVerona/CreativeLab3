/*global Vue*/
/*global axios*/
let app = new Vue({
  el: '#app',
  data: {
    match_id: '',
    user_id: '',
    win: '',
    lose: '',
    radiant_win: true,
    duration: '0',
    human_players: '',
    mmr_estimate: '',
    playername: '',
    playerimg: '',
  },
  
methods: {
    async dotaAPI() {
        try {
            const response = await axios.get('https://api.opendota.com/api/matches/' + this.match_id + '?api_key=c82847e3-ca5d-449b-b7ec-f1326c6e1f52');
            this.radiant_win = response.data.radiant_win;
            this.duration = response.data.duration;
            this.human_players = response.data.human_players;
            this.players = response.data.personaname;
          } catch (error) {
            console.log(error);
          }
        },
    async userAPI() {
        try {
            const response = await axios.get('https://api.opendota.com/api/players/' + this.user_id + '/wl?api_key=c82847e3-ca5d-449b-b7ec-f1326c6e1f52');
            this.win = response.data.win;
            this.lose = response.data.lose;
          } catch (error) {
            console.log(error);
          }
        },
    async mmrSearch() {
        try {
            const response = await axios.get('https://api.opendota.com/api/players/' + this.user_id + '?api_key=c82847e3-ca5d-449b-b7ec-f1326c6e1f52');
            this.mmr_estimate = response.data.mmr_estimate.estimate;
            this.playername = response.data.profile.personaname;
            this.playerimg = response.data.profile.avatarfull;
            
          } catch (error) {
            console.log(error);
          }
        },
    }
 });