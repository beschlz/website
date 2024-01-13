
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.32.0"
    }

    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }


  backend "s3" {
    bucket         = "bschulz-terraform-state"
    key            = "bschulz-terraform-state"
    region         = "eu-central-1"
    dynamodb_table = "bschulz-terraform-lock"
    encrypt        = true
  }
}

provider "cloudflare" {
  email = "bendt@schulz-hamburg.de"
  api_token = var.cloudflare_token
}

provider "aws" {
  region = "eu-central-1"
}

module "backend_setup" {
  source = "./tf-backend-setup"
  state_bucket_name = "bschulz-terraform-state"
  lock_table_name = "bschulz-terraform-lock"
}

module "s3-hosting" {
  source      = "./s3-static-hosting-ssl"
  domain_name = var.domain
}
