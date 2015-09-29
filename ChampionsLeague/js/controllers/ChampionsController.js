app.controller('ChampionsController', ['$scope', 'champions', function($scope, champions) {
    
    $scope.groups = [
        {
            group_name: "Group A",
            teams: [
                {
                    team_name: "Real Madrid CF",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/50051.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/50051.png"
                },
                {
                    team_name: "Paris Sains-Germain",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/52747.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/52747.png"
                },
                {
                    team_name: "Malmö FF",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/50152.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/50152.png"
                },
                {
                    team_name: "FC Shakhtar Donetsk",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/52707.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/52707.png"
                }
            ]
        },
        {
            group_name: "Group B",
            teams: [
                {
                    team_name: "PSV Eindhoven",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/50062.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/50062.png"
                },
                {
                    team_name: "VfL Wolfsburg",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/64332.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/64332.png"
                },
                {
                    team_name: "Manchester United FC",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/52682.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/52682.png"
                },
                {
                    team_name: "PFC CSKA Moskva",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/54266.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/54266.png"
                }
            ]
        },
        {
            group_name: "Group C",
            teams: [
                {
                    team_name: "Club Atlético de Madrid",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/50124.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/50124.png"
                },
                {
                    team_name: "SL Benfica",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/50147.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/50147.png"
                },
                {
                    team_name: "Galatasaray AŞ",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/50067.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/50067.png"
                },
                {
                    team_name: "FC Astana",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/2600605.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/2600605.png"
                }
            ]
        },
        {
            group_name: "Group D",
            teams: [
                {
                    team_name: "Sevilla FC",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/52714.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/52714.png"
                },
                {
                    team_name: "Juventus",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/50139.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/50139.png"
                },
                {
                    team_name: "Manchester City FC",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/52919.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/52919.png"
                },
                {
                    team_name: "Borussia Mönchengladbach",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/52757.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/52757.png"
                }
            ]
        },
        {
            group_name: "Group E",
            teams: [
                {
                    team_name: "Bayer 04 Leverkusen",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/50109.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/50109.png"
                },
                {
                    team_name: "FC Barcelona",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/50080.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/50080.png"
                },
                {
                    team_name: "AS Roma",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/50137.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/50137.png"
                },
                {
                    team_name: "FC Bate Borisov",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/66168.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/66168.png"
                }
            ]
        },
        {
            group_name: "Group F",
            teams: [
               {
                    team_name: "FC Bayern München",
                   team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/50037.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/50037.png"
                },
                {
                    team_name: "GNK Dinamo Zagreb",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/50164.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/50164.png"
                },
                {
                    team_name: "Arsenal FC",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/52280.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/52280.png"
                },
                {
                    team_name: "Olympiacos FC",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/2610.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/2610.png"
                }
            ]
        },
        {
            group_name: "Group G",
            teams: [
                {
                    team_name: "Chelsea FC",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/52914.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/52914.png"
                },
                {
                    team_name: "FC Porto",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/50064.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/50064.png"
                },
                {
                    team_name: "FC Dynamo Kyiv",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/52723.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/52723.png"
                },
                {
                    team_name: "Maccabi Tel-Aviv FC",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/57477.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/57477.png"
                }
            ]
        },
        {
            group_name: "Group H",
            teams: [
                {
                    team_name: "FC Zenit",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/52826.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/52826.png"
                },
                {
                    team_name: "Olympique Lyonnais",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/5312.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/5312.png"
                },
                {
                    team_name: "KAA Gent",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/4608.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/4608.png"
                },
                {
                    team_name: "Valencia CF",
                    team_badge_small: "http://img.uefa.com/imgml/TP/teams/logos/32x32/52268.png",
                    team_badge: "http://img.uefa.com/imgml/TP/teams/logos/70x70/52268.png"
                }
            ]
        }
    ];



    
}]);