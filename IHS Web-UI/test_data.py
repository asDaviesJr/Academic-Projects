test_data = [
    {
        'display_name': 'JupyterLab',
        'repo_name': 'jupyterlab',
        'description': 'JupyterLab is the next-generation web-based user interface for Project Jupyter.',
        'notes': '',
        'maintainer': 'Red Hat, Inc.',
        'compliant_status': 'FCRepo.png',
        'repo_logo': 'jl_logo.png',
        'created': 'Jun 20th, 2022 ',
        'updated': 'Last Updated 8 days ago',
        'num_of_tags': 1,
        'repo_tags': {
            '7a7431bf6843fe60b503710ca4e46960866b55d39be97cb7fb01ae86cc7634a9': {
                'tag': 'latest-ihs',
                'short_id': '7a7431bf6843',
                'os': 'linux',
                'architecture': 'amd64',
                'size': '1.80GB',
                'created': 'April 18th, 2022',
                'updated': 'July 25th, 2022',
                'processed': True,
                'processed_date': 'July 25th, 2022',
                'times_processed': 2,
                'compliance_status': 'UARImage.png',
                'original_compliance': "74.41%",
                'final_compliance': "88.13%",
                'reports': [],
                'processed_notes': '',
                'policy': '',
                'playbook': ''

            }


        }
    },

    {
        'display_name': 'Red Hat Universal Base Image 8', 
        'repo_name': 'ubi8',
        'description': 'The Universal Base Image is designed and engineered to be the base layer for all of your containerized applications, middleware and utilities. This base image is freely redistributable, but Red Hat only supports Red Hat technologies through subscriptions for Red Hat products. This image is maintained by Red Hat and updated regularly.', 
        'notes': '',
        'maintainer': 'Red Hat, Inc.',
        'compliant_status': 'FCRepo.png',
        'repo_logo': 'redHat.png',
        'created': 'November 2nd, 2021',
        'updated': 'Last Updated 8 days ago',
        'num_of_tags': 2,
        'repo_tags': {
            '2fd9e1478809c0c53820517b998e1b2a044207515e5d61eccb6295276bbbaffc': {
                'tag': 'latest-ihs',
                'short_id': '2fd9e1478809',
                'os': 'linux',
                'architecture': 'amd64',
                'size': '1.91GB',
                'created': 'June 16th, 2022',
                'updated': 'Last Updated 8 days ago',
                'processed': True,
                'processed_date': 'July 25th, 2022',
                'times_processed': 1,
                'compliance_status': 'COMImage.png',
                'original_compliance': "80.10%",
                'final_compliance': "91.23%",
                'reports': [],
                'processed_notes': '',
                'policy': '',
                'playbook': ''
            },

            '53d3a0837cf04ba4c687ddb39b487dc86efdbc14bd528778a7fa522637b1a3a0': {
                'tag': '8.4-213-ihs',
                'short_id': '53d3a0837cf0',
                'os': 'linux',
                'architecture': 'amd64', 
                'size': '1.73 GB',
                'created': "November 2nd, 2022",
                'updated': 'Last Updated 8 days ago',
                'processed': True,
                'processed_date': 'July 25th, 2022',
                'total_times_processed': 2,
                'compliance_status': 'UARImage.png',
                'original_compliance': "61.51%",
                'final_compliance': "85.22%",
                'reports': [],
                'processed_notes': '',
                'policy': '', 
                'playbook': ''


            }

        }
    },

    {
        'display_name': 'PostgreSQL',
        'repo_name': 'postgresql',
        'description': 'The PostgreSQL object-relational database system provides reliability and data integrity.',
        'notes': 'Pulling any images in this repo is strongly unadvised!',
        'maintainer': 'docker.io',
        'compliant_status': 'NCOMRepo.png',
        'repo_logo': 'postgresql-logo.png',
        'created': 'July 2nd, 2022',
        'updated': 'Last Updated 8 days ago',
        'num_of_tags': 1,
        'repo_tags': {
            'e09e90144645e02137d087f0dc059f4d2e3c6356ef8f9e40eeb15d1c901dbc73': {
                'tag': 'latest-ihs',
                'short_id': 'e09e90144645',
                'os': 'linux',
                'architecture': 'amd64',
                'size': '3.91 GB',
                'created': "July 2nd, 2022",
                'updated': 'Last Updated 8 days ago',
                'processed': True,
                'processed_date': 'July 25th, 2022',
                'times_processed': 2,
                'compliance_status': 'NCOMImage.png',
                'original_compliance': "51.48%",
                'final_compliance': "70.52%",
                'reports': [],
                'processed_notes': 'One or more high priority vulnerabilities are still present in image. Please see final scan report for more details.',
                'policy': '',
                'playbook': ''
            }

        }
    },

    {
        'display_name': 'Node',
        'repo_name': 'node',
        'description': 'Node.js is a JavaScript-based platform for server-side and networking applications.',
        'notes': 'This repo contains one or more non-compliant images!',
        'maintainer': 'docker.io',
        'compliant_status': 'COMRepo.png',
        'repo_logo': 'node.png',
        'created': 'July 2nd, 2022',
        'updated': 'Last Updated 8 days ago',
        'num_of_tags': 2,
        'repo_tags': {
            '3adbe565b1f05545a12f2acd51b5e77207cec7f7cf4dd4caa725d4503cd4fe7a': {
                'tag': 'latest-ihs',
                'short_id': '3adbe565b1f0',
                'os': 'linux',
                'architecture': 'amd64',
                'size': '10.21 GB',
                'created': "July 2nd, 2022",
                'updated': 'Last Updated 8 days ago',
                'processed': True,
                'processed_date': 'July 25th, 2022',
                'times_processed': 2,
                'compliance_status': 'UARImage.png',
                'original_compliance': "77.12%",
                'final_compliance': "85.11%",
                'reports': [],
                'processed_notes': '',
                'policy': '',
                'playbook': ''

            },

            '4948d3c1f469e7afb9eda6ac5fd2323d344ef0672e111505f175b847610d6075': {
                'tag': 'slim-ihs',
                'short_id': '4948d3c1f469',
                'os': 'linux',
                'architecture': 'amd64',
                'size': '6.24 GB',
                'created': "July 2nd, 2022",
                'updated': 'Last Updated 8 days ago',
                'processed': True,
                'processed_date': 'July 25th, 2022',
                'times_processed': 2,
                'compliance_status': 'NCOMImage.png',
                'original_compliance': "59.43%",
                'final_compliance': "60.19%",
                'reports': [],
                'processed_notes': 'One or more high priority vulnerabilities are still present in image. Please see final scan report for more details.',
                'policy': '',
                'playbook': ''

            }




        }
    }
]


