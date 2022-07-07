var host = "https://theartistapi.bitflex.xyz";

const PAPI = {
    'get_photo': host + '/api/packages/photos',
    'get_video': host + '/api/packages/videos',
    'get_combo': host + '/api/packages/combos',
    'get_review':host + '/api/reviews',
    'get_image':host + '/api/images',
    'get_film':host + '/api/videos',
    'create_contract':host + '/api/contact/create',
    'get_team':host + '/api/teams',
}

export default PAPI;