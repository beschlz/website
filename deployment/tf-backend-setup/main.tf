terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  required_version = "~> 1.4"
}

# bucket configuration
resource "aws_s3_bucket" "tf-state-bucket-backend" {
  bucket = var.state_bucket_name
}

# enable versioning for the bucket
resource "aws_s3_bucket_versioning" "tf-state-bucket-versioning" {
  bucket = aws_s3_bucket.tf-state-bucket-backend.id

  versioning_configuration {
    status = "Enabled"
  }
}

# enable server side encryption for the bucket
resource "aws_s3_bucket_server_side_encryption_configuration" "tf-state-bucket-encryption" {
  bucket = aws_s3_bucket.tf-state-bucket-backend.bucket

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "aws:kms"
    }
  }
}

# DynamoDB Table for terraform locks
resource "aws_dynamodb_table" "dynamodb-terraform-state-lock" {
  name           = var.lock_table_name
  hash_key       = "LockID"
  read_capacity  = 2
  write_capacity = 2

  attribute {
    name = "LockID"
    type = "S"
  }
}