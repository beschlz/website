
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.53.0"
    }
  }
}

provider "aws" {
  region = "eu-central-1"
}



module "module" {
  source      = "./s3-static-hosting-ssl"
  domain_name = var.domain
}
