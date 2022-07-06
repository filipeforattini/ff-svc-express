# ff-svc-pipetest
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Description

This repository is an example of a service built with pileline [filipeforattini/ff-iac-github-actions](https://github.com/filipeforattini/ff-iac-github-actions) and deployed on Kubernetes.

## Environments

| dev | stg | prd |
|:---:|:---:|:---:|
| [svc](https://ff-svc-nodejs.dev.forattini.app/) | - | - |


## Monitor

#### Branches

| main | develop |
| :---: | :---: |
| ![Branch Main](https://github.com/filipeforattini/ff-svc-pipetest/actions/workflows/push.yml/badge.svg?branch=main) | ![Branch Develop](https://github.com/filipeforattini/ff-svc-pipetest/actions/workflows/push.yml/badge.svg?branch=main) |

#### Workflows

| push | pull-request |
| :---: | :---: |
| ![Event Push](https://github.com/filipeforattini/ff-svc-pipetest/actions/workflows/push.yml/badge.svg) | ![Event Push](https://github.com/filipeforattini/ff-svc-pipetest/actions/workflows/pull-request.yml/badge.svg) |

#### Events

| push | pull_request |
| :---: | :---: |
| ![Event Push](https://github.com/filipeforattini/ff-svc-pipetest/actions/workflows/push.yml/badge.svg?event=push) | ![Event Push](https://github.com/filipeforattini/ff-svc-pipetest/actions/workflows/pull-request.yml/badge.svg?event=pull_request) |

