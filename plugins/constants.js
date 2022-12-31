let market_headers = [
    {
        sport: "Soccer",
        id: 1,
        markets: [
            {
                id: '1',
                name: '3 Way',
                outcomes: [
                    {name: '1', id: 1, type: '1'},
                    {name: 'X', id: 2, type: 'x'},
                    {name: '2', id: 3, type: '2'},
                ]
            },
            {
                id: '2',
                name: 'Double Chance',
                outcomes: [
                    {name: '1X', id: 1, type: '1x'},
                    {name: '12', id: 2, type: '12'},
                    {name: 'X2', id: 3, type: 'x2'},
                ]
            }
        ]
    },
    {
        sport: "Basketball",
        id: 2,
        markets: [
            {
                name: 'Winner',
                id: '43',
                hasSpread: false,
                outcomes: [
                    {name: '1', id: 17, type: '1'},
                    {name: '2', id: 18, type: '2'},
                ]
            },
            {
                name: 'Handicap',
                id: '4',
                hasSpread: true,
                outcomes: [
                    {name: '1', id: 7, type: '1'},
                    {name: '2', id: 8, type: '2'},
                ]
            },
            {
                name: 'Odd/Even',
                id: '51',
                outcomes: [
                    {name: 'Odd', id: 4572, type: 'odd'},
                    {name: 'Even', id: 4574, type: 'even'},
                ]
            }
        ]
    },
    {
        sport: "Baseball",
        id: 3,
        markets: [
            {
                name: 'Money Line',
                id: '14897',
                outcomes: [
                    {name: '1', id: 17, type: '1'},
                    {name: '2', id: 18, type: '2'},
                ]
            },
            {
                name: 'Over/Under',
                id: 160,
                hasSpread: true,
                outcomes: [
                    {name: 'Over', id: 1},
                    {name: 'Under', id: 2},
                ]
            },
            {
                name: 'Handicap',
                id: 305,
                outcomes: [
                    {name: '1 H', id: 1},
                    {name: '2 H', id: 2},
                ]
            }
        ]
    },
    {
        sport: "Ice Hockey",
        id: 4,
        markets: [
            {
                name: '1X2',
                id: '',
                outcomes: [
                    {name: '1', id: 1},
                    {name: 'X', id: 2},
                    {name: '2', id: 3},
                ]
            },
            {
                name: 'Total goals',
                id: 160,
                hasSpread: true,
                outcomes: [
                    {name: 'Over', id: 1},
                    {name: 'Under', id: 2},
                ]
            },
            {
                name: 'Next goal',
                id: 195,
                outcomes: [
                    {name: '1', id: 1},
                    {name: 'X', id: 2},
                    {name: '2', id: 3},
                ]
            },
        ]
    },
    {
        sport: "Tennis",
        id: 5,
        markets: [
            {
                name: 'Winner',
                id: '31',
                hasSpread: false,
                outcomes: [
                    {name: '1', id: 17, type: '1'},
                    {name: '2', id: 18, type: '2'},
                ]
            },
            {
                name: 'Over/Under',
                id: '8',
                hasSpread: true,
                outcomes: [
                    {name: 'Over', id: 160, type: 'over'},
                    {name: 'Under', id: 159, type: 'under'},
                ]
            },
            {
                name: 'Total Games Odd/Even',
                id: '37',
                hasSpread: false,
                outcomes: [
                    {name: 'Odd', id: 171, type: 'odd'},
                    {name: 'Even', id: 172, type: 'even'},
                ]
            },
        ]
    },
    {
        sport: "Handball",
        id: 6,
        markets: [
            {
                id: 110,
                name: '1X2',
                outcomes: [
                    {name: '1', id: 1},
                    {name: 'X', id: 2},
                    {name: '2', id: 3},
                ]
            },
            {
                id: 302,
                name: 'Total goals, regular time only',
                outcomes: [
                    {name: 'GG', id: 1},
                    {name: 'NG', id: 2},
                ]
            },
            {
                id: 160,
                name: 'Total goals home team',
                hasSpread: true,
                outcomes: [
                    {name: 'Over', id: 1},
                    {name: 'Under', id: 2},
                ]
            }
        ]
    },
    {
        sport: "Football",
        id: 16,
        markets: [
            {
                id: 110,
                name: '1X2',
                outcomes: [
                    {name: '1', id: 1},
                    {name: 'X', id: 2},
                    {name: '2', id: 3},
                ]
            },
            {
                id: 302,
                name: 'Total goals, regular time only',
                outcomes: [
                    {name: 'GG', id: 1},
                    {name: 'NG', id: 2},
                ]
            },
            {
                id: 160,
                name: 'Total goals home team',
                hasSpread: true,
                outcomes: [
                    {name: 'Over', id: 1},
                    {name: 'Under', id: 2},
                ]
            }
        ]
    },
    {
        sport: "Snooker",
        id: 19,
        markets: [
            {
                id: '17340',
                name: 'Match Winner',
                hasSpread: false,
                outcomes: [
                    {name: '1', id: 1, type: '1'},
                    {name: 'X', id: 2, type: 'x'},
                    {name: '2', id: 3, type: '2'},
                ]
            },
            {
                id: '999',
                name: 'Who will win the frame?',
                hasSpread: false,
                outcomes: [
                    {name: '1', id: 17, type: '1'},
                    {name: '2', id: 18, type: '2'},
                ]
            },
        ]
    },
    {
        sport: 'Table Tennis',
        id: 20,

        markets: [
            {
                name: 'Which team will win the match?',
                id: '177',
                hasSpread: false,
                outcomes: [
                    {name: '1', id: 17, type: '1'},
                    {name: '2', id: 18, type: '2'},
                ]
            },
            {
                id: '5',
                name: 'Total Points',
                hasSpread: true,
                outcomes: [
                    {name: 'Over', id: 11, type: 'o'},
                    {name: 'Under', id: 12, type: 'u'},
                ]
            },
            {
                name: 'Which team will win the set?',
                id: '7',
                hasSpread: true,
                outcomes: [
                    {name: '1', id: 17, type: '1'},
                    {name: '2', id: 18, type: '2'},
                ]
            },
        ]
    },
    {
        sport: "Cricket",
        id: 21,
        markets: [
            {
                id: 9841,
                name: 'Winner',
                outcomes: [
                    {name: '1', id: 1},
                    {name: '2', id: 2},
                ]
            },
            {
                id: 302,
                name: 'Next dismissal (caught / not caught)',
                outcomes: [
                    {name: 'Caught', id: 1},
                    {name: 'Not caught', id: 2},
                ]
            },
            {
                id: 160,
                name: 'Total runs',
                hasSpread: true,
                outcomes: [
                    {name: 'Over', id: 1},
                    {name: 'Under', id: 2},
                ]
            }
        ]
    },
    {
        sport: "Dart",
        id: 22,
        markets: [
            {
                id: '11478',
                name: 'Winner',
                outcomes: [
                    {name: '1', id: 1, type: '1'},
                    {name: 'X', id: 2, type: 'x'},
                    {name: '2', id: 3, type: '2'},
                ]
            },
        ]
    },
    {
        sport: "Volleyball",
        id: 23,
        markets: [
            {
                id: 110,
                name: 'Winner',
                outcomes: [
                    {name: '1', id: 1},
                    {name: '2', id: 2},
                ]
            },
            {
                id: 302,
                name: 'Total Points',
                hasSpread: true,
                outcomes: [
                    {name: 'Over', id: 1},
                    {name: 'Under', id: 2},
                ]
            },
            {
                id: 160,
                name: 'Which team will win the set?',
                outcomes: [
                    {name: 'Over', id: 1},
                    {name: 'Under', id: 2},
                ]
            }
        ]
    },
    {
        sport: "Futsal",
        id: 29,
        markets: [
            {
                id: 110,
                name: '1X2',
                outcomes: [
                    {name: '1', id: 1},
                    {name: '1', id: 2},
                    {name: '2', id: 3},
                ]
            },
            {
                id: 302,
                name: 'Total Goals',
                hasSpread: true,
                outcomes: [
                    {name: 'Over', id: 1},
                    {name: 'Under', id: 2},
                ]
            },
            {
                id: 160,
                name: 'Asian Handicap',
                outcomes: [
                    {name: '1 AH', id: 1},
                    {name: '2 AH', id: 2},
                ]
            }
        ]
    },
    {
        sport: "ESport Dota 2",
        id: 112,
        markets: [
            {
                id: 9388,
                name: 'Winner',
                outcomes: [
                    {name: '1', id: 1},
                    {name: '2', id: 3},
                ]
            },
            {
                id: 10020,
                name: 'Map - Which team will win',
                outcomes: [
                    {name: '1', id: 1},
                    {name: '2', id: 2},
                ]
            },
            {
                id: 10016,
                name: 'Total Maps',
                hasSpread: true,
                outcomes: [
                    {name: 'Over', id: 1},
                    {name: 'Under', id: 2},
                ]
            }
        ]
    },
    {
        sport: "ESport League of Legends",
        id: 111,
        markets: [
            {
                id: 9388,
                name: 'Winner',
                outcomes: [
                    {name: '1', id: 1},
                    {name: '2', id: 2},
                ]
            },
            {
                id: 10020,
                name: 'Map - Which team will win',
                outcomes: [
                    {name: '1', id: 1},
                    {name: '2', id: 2},
                ]
            },
            {
                id: 10016,
                name: 'Total Maps',
                hasSpread: true,
                outcomes: [
                    {name: 'Over', id: 1},
                    {name: 'Under', id: 2},
                ]
            }
        ]
    },
    {
        sport: "Rugby",
        id: 254,
        markets: [
            {
                id: 9388,
                name: '1X2',
                outcomes: [
                    {name: '1', id: 1},
                    {name: 'X', id: 2},
                    {name: '2', id: 3},
                ]
            },
            {
                id: 10020,
                name: 'Over/Under',
                hasSpread: true,
                outcomes: [
                    {name: 'Over', id: 1},
                    {name: 'Under', id: 2},
                ]
            },
            {
                id: 10016,
                name: 'Total Goals Home',
                outcomes: [
                    {name: 'Over', id: 1},
                    {name: 'Under', id: 2},
                ]
            }
        ]
    },
]
export default market_headers;



export const matchStatus = (status) => {
    switch (status) {
        case 'not_started':
            return 'Not Started';
        case '1p':
            return '1st Period';
        case '2p':
            return '2nd Period';
        case '1set':
            return '1st Set';
        case '2set':
            return '2nd Set';
        case '3set':
            return '3rd Set';
        case '4set':
            return '4th Set';
        case '5set':
            return '5th Set';
        case '6set':
            return '6th Set';
        case '7set':
            return '7th Set';
        case '1q':
            return '1st Quarter';
        case '2q':
            return '2nd Quarter';
        case '3q':
            return '3rd Quarter';
        case '4q':
            return '4th Quarter';
        case 'ot':
            return 'Overtime';
        case '2p_ot':
            return '2nd Period Overtime';
        case 'in_progress':
            return 'In Progress';
        case 'lunch_break':
            return 'Lunch Break';
        case 'injury_break':
            return 'Injury Break';
        case '1g':
            return '1st Game';
        case '2g':
            return '2nd Game';
        case '3g':
            return '3rd Game';
        case '4g':
            return '4th Game';
        case '5g':
            return '5th Game';
        case 'paused':
            return 'Paused';
        case 'ended':
            return 'Ended';
        default:
            break;
    }
}
