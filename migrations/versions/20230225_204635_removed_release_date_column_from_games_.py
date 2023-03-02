"""removed release date column from games table

Revision ID: 1c9578907ba3
Revises: 7f5e1dd0eb6c
Create Date: 2023-02-25 20:46:35.421229

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1c9578907ba3'
down_revision = '7f5e1dd0eb6c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('games', schema=None) as batch_op:
        batch_op.drop_column('release_date')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('games', schema=None) as batch_op:
        batch_op.add_column(sa.Column('release_date', sa.DATE(), nullable=False))

    # ### end Alembic commands ###